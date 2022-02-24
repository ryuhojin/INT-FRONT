import styled from "styled-components";
import Search from "../common/Search";

const HomeStyle = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin:0 1rem;
    @media only screen and (min-width: 550px) {
        margin: 0 auto;
        width:40%;
    }
`;


const Home = ({ search, setSearch, onList }: { search: string, setSearch: any, onList: any }) => {
    return <HomeStyle>
        <Search search={search} setSearch={setSearch} onEnter={onList} placeholder={"검색어를 입력후 Enter를 눌러주세요..."} />
    </HomeStyle>
}
export default Home;