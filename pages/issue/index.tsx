import Seo from "../../components/common/Seo";
import HeaderContainer from "../../containers/base/HeaderContainer";
import ListContainer from "../../containers/list/ListConatiner";
import NFLayout from "../../layouts/NFLayout";
const IssueListPage = () => {
  return (
    <>
      <Seo title="이슈 목록" />
      <NFLayout header={<HeaderContainer />} body={<ListContainer />} />
    </>
  );
};
export default IssueListPage;
