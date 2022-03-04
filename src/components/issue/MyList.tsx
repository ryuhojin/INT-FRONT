import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import CardSkeleton from './CardSkeleton'

const StyledMyList = styled.div`
    
`

const CardSkeletonGroup = () => {
    return <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </>
}

const MyList = ({ status, data, hasMoreChecker, isFetchingNextPage, onDetail }: any) => {
    return <StyledMyList>
        {status === "loading" ?
            <CardSkeletonGroup /> :
            status === "error" ?
                <></> :
                data?.pages && data?.pages[0].data.length !== 0 ?
                    data?.pages.map((value: any, index: any) => {
                        return <React.Fragment key={index}>
                            {value.data.map((value: any, index: any) => {
                                return <Card
                                    title={value?.title}
                                    content={value.content.replace(/(<([^>]+)>)/gi, "")}
                                    name={value.developer.name}
                                    date={value.modifiedDate.substring(0, 10).replace(/-/gi, ".")}
                                    count={value.solutionCount}
                                    adoptYn={value.adoptYn}
                                    key={index}
                                    index={value.id}
                                    onDetail={onDetail} />
                            })}
                        </React.Fragment>
                    }) : <h1 style={{ textAlign: 'center' }}>검색된 이슈가 없습니다.</h1>
        }
        <div ref={hasMoreChecker}></div>
        {
            isFetchingNextPage ? <> <CardSkeletonGroup /></> : <></>
        }
    </StyledMyList>
}
export default MyList;