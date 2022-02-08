import Seo from "../../components/common/Seo";
import HeaderContainer from "../../containers/base/HeaderContainer";
import MyInfoContainer from "../../containers/user/MyInfoContainer";
import BaseLayout from "../../layouts/BaseLayout";

const UserInfoPage = () => {
    return <>
        <Seo title="내 정보" />
        <BaseLayout header={<HeaderContainer />} body={<MyInfoContainer />} />
    </>
}
export default UserInfoPage;