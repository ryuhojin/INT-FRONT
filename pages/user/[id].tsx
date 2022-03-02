import { useRouter } from "next/router";

import Seo from "src/components/common/Seo";
import HeaderContainer from "src/containers/common/HeaderContainer";
import FooterContainer from "src/containers/common/FooterContainer";
import MainLayout from "src/layouts/MainLayout";
import UserInfoContainer from "src/containers/user/UserInfoContainer";

const UserInfoPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Seo title="유저 정보" />
      <MainLayout
        header={<HeaderContainer />}
        home={<UserInfoContainer id={query.id} />}
        footer={<FooterContainer />}
      />
    </>
  );
};
export default UserInfoPage;
