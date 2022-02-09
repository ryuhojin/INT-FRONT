import SearchBox from "../../components/main/SearchBox"
import { RootState } from "../../store/modules";
import { useDispatch, useSelector } from "react-redux";
import { getSearchListThunk, setSearchAsync } from "../../store/modules/search";
import Router from "next/router";
const MainContainer = () => {
    const { search } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();

    const onSearchList = async (e: any) => {
        e.preventDefault();
        if (e.key !== "Enter") return;
        await dispatch(getSearchListThunk(search))
        Router.push('/issue')
    }
    
    return <SearchBox search={search} setSearch={(e: any) => { e.preventDefault(); dispatch(setSearchAsync(e.target.value)) }} setEnter={onSearchList} />
}
export default MainContainer