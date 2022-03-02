import Seo from "src/components/common/Seo";
import MainLayout from "src/layouts/MainLayout";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";

import AccountContainer from "src/containers/user/AccountContainer";

const SignUpPage = () => {
    return <>
        <Seo title="회원가입"></Seo>
        <MainLayout header={<HeaderContainer />} home={<AccountContainer />} footer={<FooterContainer />} />
    </>;
}
export default SignUpPage;