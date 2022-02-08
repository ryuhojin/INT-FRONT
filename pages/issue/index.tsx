import Seo from "../../components/common/Seo"
import HeaderContainer from "../../containers/base/HeaderContainer";
import NHLayout from "../../layouts/NHLayout";
const IssueListPage = () => {
    return <>
        <Seo title="이슈 목록" />
        <NHLayout header={<HeaderContainer />} body={null} />
    </>
}
export default IssueListPage;