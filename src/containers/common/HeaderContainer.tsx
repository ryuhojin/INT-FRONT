import Router from "next/router";
import Header from "src/components/common/Header";
import { useAuth } from "utils/auth";

const HeaderContainer = () => {
    const auth = useAuth();
    const isLoggedIn = auth.isLoggedIn();

    /**
     * @name onHome
     * @description 홈 페이지로 전환
     */
    const onHome = () => {
        Router.push('/index2')
    }
    /**
     * @name onLogin
     * @description 로그인 페이지로 전환
     */
    const onLogin = () => {
        Router.push('/user/index2')
    }
    /**
     * @name onLogout
     * @description 로그아웃 후 메인페이지로 전환
     */
    const onLogout = () => {
        auth.signout();
        Router.push('/index2')
    }
    /**
     * @name onStatus
     * @description 로그인 정보 페이지로 전환
     */
    const onStatus = () => {
        Router.push('/user/info2')
    }

    return <Header isLoggedIn={isLoggedIn} onHome={onHome} onLogin={onLogin} onLogout={onLogout} onStatus={onStatus} />
}
export default HeaderContainer;