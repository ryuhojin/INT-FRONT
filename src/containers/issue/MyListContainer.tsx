import { getUserIssues } from "api/modules/issue"
import useIntersectionObserver from "hooks/useIntersectionObserver"
import Router from "next/router"
import { useRef } from "react"
import { useInfiniteQuery } from "react-query"
import MyList from "src/components/issue/MyList"

const MyListContainer = () => {

    const {
        status,
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery(
        ['userIssueList'],
        async ({ pageParam = { page: 0 } }) => {
            return await getUserIssues({ page: pageParam.page })
        },
        {
            getNextPageParam: lastPage => {
                return lastPage.nextId ? { page: lastPage.nextId } : false
            },
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    )
    const onDetail = (id: number) => Router.push(`/issue/${id}`)

    const hasMoreChecker = useRef(null);

    useIntersectionObserver({
        target: hasMoreChecker,
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage,
    })

    return <MyList isFetchingNextPage={isFetchingNextPage} hasMoreChecker={hasMoreChecker} status={status} data={data} onDetail={onDetail} />
}
export default MyListContainer;