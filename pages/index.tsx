import Seo from "../components/common/Seo";
import HeaderBaseContainer from "../containers/base/HeaderBaseContainer";
import MainContainer from "../containers/main/MainContainer";
import BaseLayout from "../layouts/BaseLayout";

const MainPage = () => {
  return <>
    <Seo title="Main" />
    <BaseLayout header={<HeaderBaseContainer />} body={<MainContainer />} />
  </>
}
export default MainPage;