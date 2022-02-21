import Seo from "components/common/Seo";

import HeaderContainer from "containers/base/HeaderContainer";
import SignupContainer from "containers/user/SignupContainer";

import NFLayout from "layouts/NFLayout";

const SignUp = () => {
    return <>
        <Seo title="회원 가입" />
        <NFLayout header={<HeaderContainer />} body={<SignupContainer />} />
    </>
}
export default SignUp;