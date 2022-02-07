import Router from "next/router";
import Header from "../../components/base/Header";
import UserMenuBaseContainer from "./UserMenuBaseContainer";

const HeaderBaseContainer = () => {
    const onHome = () => Router.push('/')
    return <Header userMenu={<UserMenuBaseContainer />} onHome={onHome} />;
}
export default HeaderBaseContainer;