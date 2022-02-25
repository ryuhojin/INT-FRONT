import Seo from "components/common/Seo";
import HeaderContainer from "src/containers/common/HeaderContainer";
import WriteContainer from "src/containers/issue/WriteContainer";
import FooterContainer from "src/containers/common/FooterContainer";
import MainLayout from "src/layouts/MainLayout";

const WritePage2 = () => {
    return <>
        <Seo title="이슈 등록" />
        <MainLayout header={<HeaderContainer />} home={<WriteContainer />} footer={<FooterContainer />} />
    </>
}
export default WritePage2;