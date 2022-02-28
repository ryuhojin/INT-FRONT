import Seo from "components/common/Seo";
import FooterContainer from "src/containers/common/FooterContainer";
import HeaderContainer from "src/containers/common/HeaderContainer";
import UpdateContainer from "src/containers/issue/UpdateContainer"
import MainLayout from "src/layouts/MainLayout";

const UpdateIssuePage = () => {
    return <>
        <Seo title="이슈 수정" />
        <MainLayout header={<HeaderContainer />} home={<UpdateContainer />} footer={<FooterContainer />} />
    </>;
}
export default UpdateIssuePage;