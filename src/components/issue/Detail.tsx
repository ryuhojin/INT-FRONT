import styled from "styled-components";

const DetailStyle = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    margin:0 1rem;
    @media only screen and (min-width: 550px) {
        margin: 0 auto;
        width:30%;
    }
`;
const DetailTitleStyle = styled.div`
    border-radius: 10px;
    margin-top:2rem;
    h1{
        font-size:1.5rem;
        line-height: 1.725rem;
        font-weight: bold;
    }
    div{

    }
    .strong {
        font-weight: 600;
    }
`
const DetailTagStyle = styled.div`
    margin: 1rem 0 0.5rem 0;
    border-radius: 10px;
    span {
        color:white;
        font-weight:bold;
        padding: 0.2rem 0.5rem;
        border-radius:10px;
        background:#d1d1d1;
        font-size:0.8rem;
        line-height: 1.8rem;
        cursor:pointer;
    }
`

const DetailContentStyle = styled.div`
    margin:0.5rem 0;
    border-radius: 10px;
`
const DetailSolutionStyle = styled.div`
    
`
const Detail = () => {
    return <DetailStyle>
        <DetailTitleStyle>
            <h1>안녕하 하세요 안녕 하세요 안녕세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하하세요 안녕 하세요 안녕하세요 안녕요 안녕하세요</h1>
            <br />
            <span><span className="strong">류호진</span>&nbsp;&nbsp;·&nbsp;&nbsp;<span>2022.01.24</span></span>
            <br />
        </DetailTitleStyle>
        <DetailTagStyle>
            <span># 가나다라</span> <span># 가나다라</span> <span># 가나다라</span> <span># 가나다라</span> <span># 가나다라</span> <span># 가나다라</span> <span># 가나다라</span> <span># 가나다라</span>
        </DetailTagStyle>
        <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
        <DetailContentStyle>
            가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라바사아자카타파하  가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하
        </DetailContentStyle>
        <DetailSolutionStyle>
            
        </DetailSolutionStyle>
    </DetailStyle>
}
export default Detail;