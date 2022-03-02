import Seo from "src/components/common/Seo";
import MainLayout from "src/layouts/MainLayout";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";

import LoginContainer from "src/containers/user/LoginContainer";

const SignInPage = () => {
    return <>
        <Seo title="로그인"></Seo>
        <MainLayout header={<HeaderContainer />} home={<LoginContainer />} footer={<FooterContainer />} />
    </>;
}
export default SignInPage;