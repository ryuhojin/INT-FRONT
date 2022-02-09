import List from "../../components/list/List";
import SearchBox from "../../components/list/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import { getSearchListThunk, getSearchScrollThunk, setSearchAsync } from "../../store/modules/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { noData } from '../../utils/common'
const ListContainer = () => {
  const { search } = useSelector((state: RootState) => state.search);
  const { list, pageable, loading, error } = useSelector((state: RootState) => state.search.searchList);
  const dispatch = useDispatch();

  const onSearchList = async (e: any) => {
    e.preventDefault();
    if (e.key !== "Enter") return;
    await dispatch(getSearchListThunk(search))
  }

  const setFormatData = (list: any[]) => {
    console.log(list)
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
        adobtYN: v.adobtYN
      };
    });
  };

  useEffect(() => {
    if (list.length != 0) return;
    dispatch(getSearchListThunk(search))
  }, [])

  const fetch = () => {
    dispatch(getSearchScrollThunk(pageable.page, pageable.query))
  }

  return (
    <>
      <SearchBox search={search} setSearch={(e: any) => { e.preventDefault(); dispatch(setSearchAsync(e.target.value)) }} setEnter={onSearchList} />
      <InfiniteScroll
        dataLength={list.length}
        next={fetch}
        hasMore={pageable.hasMore}
        loader={<List list={noData} />}
      >
        <List list={setFormatData(list)} />
      </InfiniteScroll>
    </>
  );
};
export default ListContainer;
