import { useState } from "react";
import { checkName } from "api/modules/user";
import UserInfo from "components/user/UserInfo";
import { useRecoilValue } from "recoil";
import {  useAuth } from "utils/auth";
import { authAtom } from "store/atom";
import Router from "next/router";
import { useEffect } from "react";
const MyInfoContainer = () => {
  const user: any = useRecoilValue(authAtom);
  const auth = useAuth();
  const [userEdit, setUserEdit] = useState(user);
  const [inputState, setInputState] = useState(false);

  useEffect(() => {
    setUserEdit(user);
  }, [user]);

  const toggleState = () => setInputState(!inputState);

  const onChangeUserData = (e: any) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setUserEdit({ ...userEdit, ...{ name: e.target.value } });
        break;
      case "email":
        setUserEdit({ ...userEdit, ...{ email: e.target.value } });
        break;
      case "introduction":
        setUserEdit({ ...userEdit, ...{ introduction: e.target.value } });
        break;
      case "gitUrl":
        setUserEdit({ ...userEdit, ...{ gitUrl: e.target.value } });
        break;
      case "webSiteUrl":
        setUserEdit({ ...userEdit, ...{ webSiteUrl: e.target.value } });
        break;
      case "groupName":
        setUserEdit({ ...userEdit, ...{ groupName: e.target.value } });
        break;
      default:
        break;
    }
  };
  const updateAccount = async () => {
    const { data } = await checkName(userEdit.name);
    if (data.adobtYN) return;
    await auth.uptuser(userEdit);
    toggleState();
  };

  const deleteAccount = async () => {
    await auth.deluser(user.userId);
    Router.push("/");
  };
  if (userEdit === null) return <></>
  return (
    <UserInfo
      paramsUser={userEdit}
      inputState={inputState}
      deleteAccount={deleteAccount}
      updateAccount={updateAccount}
      onChangeUserData={onChangeUserData}
      toggleState={toggleState}
    />
  );
};
export default MyInfoContainer;
