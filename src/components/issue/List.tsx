import React from "react";
import styled from "styled-components";
import Search from "../common/Search";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

const ListStyle = styled.div`
    height:100%;
    display:grid;
    grid-template-columns:  1fr minmax(auto,35rem) 1fr;
    grid-template-rows:1fr;
    grid-template-areas: "left middle right";
    @media only screen and (max-width: 550px) {
        grid-template-columns: minmax(1rem,auto) minmax(20rem,auto) minmax(1rem,auto);
        grid-template-rows: 1fr;
        grid-template-areas: "left middle right";
    }
`;
const SearchPanel = styled.div`
    grid-area:"middle";
`;
const LeftPanel = styled.div`
    grid-area:"left";
`;
const RightPanel = styled.div`
    grid-area:"right";
`;
const CardSkeletonGroup = () => {
    return <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </>
}

const List = ({ search, status, data, setSearch, hasMoreChecker, isFetchingNextPage }: { search: string, status: string, data: any, setSearch: any, hasMoreChecker: any, isFetchingNextPage: any }) => {
    return <ListStyle>
        <LeftPanel />
        <SearchPanel>
            <Search style={{ 'margin': '2rem 0' }} placeholder="검색어를 입력해주세요" search={search} setSearch={setSearch} />

            {status === "loading" ?
                <CardSkeletonGroup /> :
                status === "error" ?
                    <></> :
                    data?.pages && data?.pages[0].data.length !== 0 ?
                        data?.pages.map((value: any, index: any) => {
                            return <React.Fragment key={index}>
                                {value.data.map((value: any, index: any) => {
                                    return <Card title={value?.title} content={value.content.replace(/(<([^>]+)>)/gi, "")} name={value.developer.name} date={value.modifiedDate.substring(0,10).replace(/-/gi,".")} count={value.solutionCount} adoptYn={value.adoptYn} key={index} index={value.id} />
                                })}
                            </React.Fragment>
                        }) : <h1 style={{ textAlign: 'center' }}>검색된 이슈가 없습니다.</h1>
            }
            <div ref={hasMoreChecker}></div>
            {
                isFetchingNextPage ? <> <CardSkeletonGroup /></> : <></>
            }
        </SearchPanel>

        <RightPanel />
    </ListStyle>
}
export default List;