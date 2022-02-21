import SearchBox from "components/list/SearchBox";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { getIssues } from "api/modules/issue";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import React from "react";
import { searchAtom, toggleAtom } from "store/atom";
import { useRecoilState } from "recoil";
import { useDebounce } from "hooks/useDebounce";
import CardContainer from "./CardContainer";

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

  return <>
    <SearchBox search={search} setSearch={(e: any) => { e.preventDefault(); setSearch(e.target.value) }} placeholder={"검색어를 입력 해주세요.."} />
    {
      status === "loading" ?
        <p></p> :
        status === "error" ?
          <p></p> :
          <div className="mt-8">
            {
              data?.pages && data?.pages[0].data.length !== 0 ?
                data?.pages.map((value: any, index: any) => {
                  return <React.Fragment key={index}>
                    {value.data.map((value: any, index: any) => {
                      return <div className="flex justify-center" key={index}><CardContainer data={value} index={value.id} /></div>
                    })}
                  </React.Fragment>
                }) : <div className="flex justify-center">검색된 이슈가 없습니다.</div>
            }
            <div ref={hasMoreChecker}></div>
          </div>
    }
  </>
};
export default ListContainer;
