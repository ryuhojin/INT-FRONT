import Seo from "../../components/common/Seo"
import HeaderContainer from "../../containers/base/HeaderContainer";
import NFLayout from "../../layouts/NFLayout";
const IssueListPage = () => {
    return <>
        <Seo title="이슈 목록" />
        <NFLayout header={<HeaderContainer />} body={null} />
    </>
}
export default IssueListPage;