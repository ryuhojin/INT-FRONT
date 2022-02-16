import SearchBox from "../../components/list/SearchBox";
import { useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { getIssues } from "../../api/modules/issue";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import React from "react";
import { searchAtom } from "../../store/atom";
import { useRecoilState } from "recoil";
import { useDebounce } from "../../hooks/useDebounce";

const ListContainer = () => {
  const [search, setSearch] = useRecoilState(searchAtom);
  const {
    status,
    data,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['issuelist', useDebounce(search, 1000)],
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

  const setFormatData = (list: any[]) => {
    return list.map((v: any) => {
      return {
        id: v.id,
        title: v.title,
        content: v.content.replace(/(<([^>]+)>)/gi, ""),
        docType: v.docType,
        hits: v.hits,
        recommendationCount: v.recommendationCount,
        developer: v.developer,
        modifiedDate: v.modifiedDate,
        solutionCount: v.solutionCount,
        hashtags: v.hashtags,
        adoptYn: v.adoptYn
      };
    });
  };

  return <>
    <SearchBox search={search} setSearch={(e: any) => { e.preventDefault(); setSearch(e.target.value) }} placeholder={"검색어를 입력 해주세요.."} />
    {
      status === "loading" ?
        <p>로딩중..</p> :
        status === "error" ?
          <p>에러..</p> :
          <>
            {
              data?.pages.map((value: any, index: any) => {
                return <React.Fragment key={index}>
                  {value.data.map((value: any, index: any) => {
                    return <p style={{
                      border: '1px solid gray',
                      borderRadius: '5px',
                      padding: '2rem 1rem',
                    }} key={index}>{value.title}{value.content.replace(/(<([^>]+)>)/gi, "")}</p>
                  })}
                </React.Fragment>
              })
            }
            <div ref={hasMoreChecker}></div>
          </>
    }
  </>
};
export default ListContainer;
