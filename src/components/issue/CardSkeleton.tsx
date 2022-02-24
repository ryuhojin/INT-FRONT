import styled from "styled-components";

const CardStyle = styled.div`
    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
            border-color:rgba(165, 165, 165, 0.1);
        }

        50% {
            background-color: rgba(165, 165, 165, 0.3);
            border-color:rgba(165, 165, 165, 0.3);
        }

        100% {
            background-color: rgba(165, 165, 165, 0.1);
            border-color:rgba(165, 165, 165, 0.1);
        }
    }
    border:1px solid rgba(165, 165, 165, 0.8);
    border-radius: 10px;
    padding: 1rem;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    margin: 1rem 0;

    h1{
        font-size:1rem;
        line-height:1rem;
        border-radius:5px;
        animation: skeleton-gradient 1.8s infinite ease-in-out;
    }
    p{
        margin:0.5rem 0;
        background:lightgray;
        border-radius:5px;
        height: 3.3rem;
        animation: skeleton-gradient 1.8s infinite ease-in-out;
    }
    span{
        font-size:0.75rem;
        line-height: 0.875rem;
        background:lightgray;
        border-radius:5px;
        animation: skeleton-gradient 1.8s infinite ease-in-out;
    }
    hr {
        color:#f1f1f1;
        border-color:#f1f1f1;
        margin: 0.5rem 0 ;
        animation: skeleton-gradient 1.8s infinite ease-in-out;
    }
`;
const FlexStyle = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`
const CardSkeleton = () => {
    return <CardStyle>
        <h1>　</h1>
        <p></p>
        <FlexStyle><span>　　　　　　　</span><span>　　　　　　</span></FlexStyle>
        <hr />
        <FlexStyle><span>　　　　　　</span><span>　　　　</span></FlexStyle>
    </CardStyle>
}
export default CardSkeleton;