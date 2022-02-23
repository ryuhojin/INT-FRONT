import Seo from "components/common/Seo";
import MainLayout from "src/layouts/MainLayout";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";

import MyinfoContainer from "src/containers/user/MyinfoContainer";

const SignInPage2 = () => {
    return <>
        <Seo title="내 정보"/>
        <MainLayout header={<HeaderContainer />} home={<MyinfoContainer />} footer={<FooterContainer />} />
    </>;
}
export default SignInPage2;