import Seo from "components/common/Seo";
import FooterContainer from "src/containers/common/FooterContainer";
import HeaderContainer from "src/containers/common/HeaderContainer";
import ListContainer from "src/containers/issue/ListContainer";
import MainLayout from "src/layouts/MainLayout";

const IssueListPage2 = () => {
    return <>
        <Seo title="이슈 목록" />
        <MainLayout header={<HeaderContainer />} home={<ListContainer />} footer={<FooterContainer />} />
    </>
}
export default IssueListPage2;