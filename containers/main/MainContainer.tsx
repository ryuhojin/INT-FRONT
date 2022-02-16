import SearchBox from "../../components/main/SearchBox"
import Router from "next/router";
import { searchAtom } from "../../store/atom";
import { useRecoilState } from "recoil";
const MainContainer = () => {
    const [search, setSearch] = useRecoilState(searchAtom);

    const onSearchList = async (e: any) => {
        e.preventDefault();
        if (e.key !== "Enter") return;
        Router.push('/issue')
    }

    return <SearchBox search={search} setSearch={(e: any) => { e.preventDefault(); setSearch(e.target.value) }} setEnter={onSearchList} />
}
export default MainContainer