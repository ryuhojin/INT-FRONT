import Seo from "../../components/common/Seo";
import HeaderContainer from "../../containers/base/HeaderContainer";
import MyInfoContainer from "../../containers/user/MyInfoContainer";
import NFLayout from "../../layouts/NFLayout";

const UserInfoPage = () => {
    return <>
        <Seo title="내 정보" />
        <NFLayout header={<HeaderContainer />} body={<MyInfoContainer />} />
    </>
}
export default UserInfoPage;