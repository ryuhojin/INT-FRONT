import Seo from "../../components/common/Seo"
import BaseLayout from "../../layouts/BaseLayout"
import SigninContainer from "../../containers/user/SigninContainer"
import HeaderBaseContainer from "../../containers/base/HeaderBaseContainer"
const SignInPage = () => {
    return <>
        <Seo title="로그인" />
        <BaseLayout header={<HeaderBaseContainer />} body={<SigninContainer />} />
    </>
}
export default SignInPage