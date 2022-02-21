import { useRouter } from "next/router";

import Seo from "components/common/Seo";

import HeaderContainer from "containers/base/HeaderContainer";
import UserInfoContainer from "containers/user/UserInfoContainer";

import NFLayout from "layouts/NFLayout";

const UserInfoIdPage = () => {
    const { query } = useRouter();
    return <>
        <Seo title="내 정보" />
        <NFLayout header={<HeaderContainer />} body={<UserInfoContainer id={query.id} />} />
    </>
}
export default UserInfoIdPage;