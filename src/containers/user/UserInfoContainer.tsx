import { getUserInfo } from "api/modules/user";
import { useEffect, useState } from "react";
import UserInfo from "src/components/user/UserInfo";

const UserInfoContainer = ({ id }: any) => {
  const [user, setUser] = useState<any>();

  const selectUser = async () => {
    if (!id) return;
    const response = await getUserInfo(id);
    if (response.status == 200) {
      setUser(response.data);
    }
  };
  useEffect(() => {
    if (!id) return;
    selectUser();
  }, [id]);
  return <UserInfo user={user} />;
};
export default UserInfoContainer;
