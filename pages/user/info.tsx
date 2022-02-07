import Seo from "../../components/common/Seo";
import HeaderBaseContainer from "../../containers/base/HeaderBaseContainer";
import MyInfoContainer from "../../containers/user/MyInfoContainer";
import BaseLayout from "../../layouts/BaseLayout";

const UserInfoPage = () => {
    return <>
        <Seo title="내 정보" />
        <BaseLayout header={<HeaderBaseContainer />} body={<MyInfoContainer />} />
    </>
}
export default UserInfoPage;