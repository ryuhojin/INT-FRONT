import Seo from "../../components/common/Seo"
import BaseLayout from "../../layouts/BaseLayout"
import SigninContainer from "../../containers/user/SigninContainer"
import HeaderContainer from "../../containers/base/HeaderContainer"
const SignInPage = () => {
    return <>
        <Seo title="로그인" />
        <BaseLayout header={<HeaderContainer />} body={<SigninContainer />} />
    </>
}
export default SignInPage