import styled from "styled-components";
import Search from "../common/Search";

const HomeStyle = styled.div`
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Home = () => {
    return <HomeStyle>
        <Search placeholder={"검색어를 입력후 Enter를 눌러주세요"}/>
    </HomeStyle>
}
export default Home;