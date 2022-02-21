import { useState } from "react";
import { getUserInfo } from "api/modules/user";
import UserInfoID from "components/user/UserInfoID";
import { useEffect } from "react";
const UserInfoContainer = ({ id }: any) => {
  const [inputState, setInputState] = useState(false);
  const [user, setUser] = useState<any>({});

  const toggleState = () => setInputState(!inputState);

  const selectAccount = async () => {
    setUser(await (await getUserInfo(id)).data);
  };
  
  useEffect(() => {
    if (!id) return;
    selectAccount();
  }, [id])


  return (
    <UserInfoID
      paramsUser={user}
      inputState={inputState}
      selectAccount={selectAccount}
      toggleState={toggleState}
    />
  );
};
export default UserInfoContainer;
