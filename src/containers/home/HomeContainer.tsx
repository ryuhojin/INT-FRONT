import Router from "next/router";
import { useRecoilState } from "recoil";
import Home from "src/components/home/Home";
import { searchAtom } from "store/atom";

const HomeContainer = () => {
    const [search, setSearch] = useRecoilState(searchAtom);
    return <Home search={search} setSearch={(e: any) => { e.preventDefault(); setSearch(e.target.value); }} onList={(e: any) => { e.preventDefault(); if (e.keyCode !== 13) return; Router.push('issue') }} />
}
export default HomeContainer;