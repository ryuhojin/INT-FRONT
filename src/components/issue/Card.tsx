import styled from "styled-components";

const CardStyle = styled.div`
    border:1px solid black;
    border-radius: 10px;
    padding: 1rem;
    cursor:pointer;
    margin: 1rem 0;
    h1{
        font-size:1rem;
        line-height:1rem;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p{
        margin:0.5rem 0;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        /* 여러 줄 자르기 추가 스타일 */
        white-space: normal;
        line-height: 1.1rem;
        font-size:0.875rem;
        height: 3.3rem;
        text-align: left;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    span{
        color:gray;
        font-size:0.75rem;
        line-height: 0.875rem;
    }
    hr {
        margin: 0.5rem 0 ;
    }
`;
const FlexStyle = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`
const Card = ({ title, index, content, name, date, count, adoptYn }: { index: number, title: string, content: string, name: string, date: string, count: number, adoptYn: boolean }) => {
   return <CardStyle>
        <h1>{title}</h1>
        <p>{content}</p>
        <FlexStyle><span>{count} 개의 솔루션</span>{adoptYn ? <span style={{ "color": "orange" }}>채택됨</span> : <span >채택안됨</span>}</FlexStyle>
        <hr />
        <FlexStyle><span>작성자 - {name}</span><span>{date}</span></FlexStyle>
    </CardStyle>
}
export default Card;