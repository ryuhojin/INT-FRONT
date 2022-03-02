import Seo from "src/components/common/Seo";
import MainLayout from "src/layouts/MainLayout";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";

import MyinfoContainer from "src/containers/user/MyinfoContainer";

const MyInfoPage = () => {
    return <>
        <Seo title="내 정보" />
        <MainLayout header={<HeaderContainer />} home={<MyinfoContainer />} footer={<FooterContainer />} />
    </>;
}
export default MyInfoPage;