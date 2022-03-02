import Seo from "src/components/common/Seo";
import FooterContainer from "src/containers/common/FooterContainer";
import HeaderContainer from "src/containers/common/HeaderContainer";
import HomeContainer from "src/containers/home/HomeContainer";
import MainLayout from "src/layouts/MainLayout";

const HomePage = () => {
    return <>
        <Seo title="홈"></Seo>
        <MainLayout header={<HeaderContainer />} home={<HomeContainer />} footer={<FooterContainer />} />
    </>
}
export default HomePage;