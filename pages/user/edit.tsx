import Seo from "src/components/common/Seo";
import MainLayout from "src/layouts/MainLayout";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";

import EditContainer from "src/containers/user/EditContainer";
const EditInfoPage = () => {
    return <>
        <Seo title="정보 수정" />
        <MainLayout header={<HeaderContainer />} home={<EditContainer />} footer={<FooterContainer />} />
    </>
}
export default EditInfoPage;