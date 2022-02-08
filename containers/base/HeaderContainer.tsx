import Router from "next/router";
import Header from "../../components/base/Header";
import UserMenuContainer from "./UserMenuContainer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignOutThunk } from "../../store/modules/user";
import { delCookie } from "../../utils/common";

const HeaderContainer = () => {
    const dispatch = useDispatch();

    const [tab, setTab] = useState(false);
    const toggleTab = () => setTab(!tab);

    const onHome = () => Router.push('/')
    const onGetUserInfo = () => Router.push('/user/info')
    const onSignout = async () => {
        await dispatch(setSignOutThunk())
        await delCookie('access-token')
        setTab(!tab);
        Router.push('/')
    }

    return <Header userMenu={<UserMenuContainer toggleTab={toggleTab} />} onHome={onHome} onGetUserInfo={onGetUserInfo} onSignout={onSignout} tabState={tab} />;
}
export default HeaderContainer;