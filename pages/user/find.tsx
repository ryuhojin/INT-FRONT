import Seo from "src/components/common/Seo";
import MainLayout from "src/layouts/MainLayout";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";
import FindContainer from "src/containers/user/FindContainer";

const FindPage = () => {
    return <>
        <Seo title="비밀번호 찾기" />
        <MainLayout header={<HeaderContainer />} home={<FindContainer />} footer={<FooterContainer />} />
    </>
}
export default FindPage;