import { getIssues } from "api/modules/issue";
import { useDebounce } from "hooks/useDebounce";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { useRecoilState } from "recoil";
import List from "src/components/issue/List";
import { searchAtom, toggleAtom } from "store/atom";

const ListContainer = () => {
    const [search, setSearch] = useRecoilState(searchAtom);
    const [toggle, setToggle] = useRecoilState(toggleAtom);

    useEffect(() => {
        if (toggle) {
            setToggle(false);
        }
    })


    const {
        status,
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery(
        ['issuelist', useDebounce(search, 1000), toggle],
        async ({ pageParam = { query: search, page: 0 } }) => {
            return await getIssues({ query: pageParam.query, page: pageParam.page })
        },
        {
            getNextPageParam: lastPage => {
                return lastPage.nextId ? { query: search, page: lastPage.nextId } : false
            },
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    )

    const hasMoreChecker = useRef(null);

    useIntersectionObserver({
        target: hasMoreChecker,
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage,
    })
    return <List search={search} isFetchingNextPage={isFetchingNextPage} hasMoreChecker={hasMoreChecker} setSearch={(e: any) => { e.preventDefault(); setSearch(e.target.value) }} status={status} data={data} />
}
export default ListContainer;