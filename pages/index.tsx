import Seo from "components/common/Seo";

import HeaderContainer from "containers/base/HeaderContainer";
import MainContainer from "containers/main/MainContainer";

import BaseLayout from "layouts/BaseLayout";

const MainPage = () => {
  return <>
    <Seo title="Main" />
    <BaseLayout header={<HeaderContainer />} body={<MainContainer />} />
  </>
}
export default MainPage;