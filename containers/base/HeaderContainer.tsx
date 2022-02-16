import Router from "next/router";
import Header from "../../components/base/Header";
import UserMenuContainer from "./UserMenuContainer";
import { useState } from "react";
import { authAtom, useAuth } from "../../utils/auth";
import { useRecoilValue } from "recoil";

const HeaderContainer = () => {
    const user = useRecoilValue(authAtom);
    const auth = useAuth();

    const [tab, setTab] = useState(false);
    const toggleTab = () => setTab(!tab);

    const onHome = () => Router.push('/')
    const onGetUserInfo = () => Router.push('/user/info')
    const onSignout = async () => {
        setTab(!tab);
        auth.signout();
        Router.push('/')
    }

    return <Header userMenu={<UserMenuContainer toggleTab={toggleTab} user={user} />} onHome={onHome} onGetUserInfo={onGetUserInfo} onSignout={onSignout} tabState={tab} />;
}
export default HeaderContainer;