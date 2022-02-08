import { EventHandler, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUserInfo } from "../../api/modules/user";
import UserInfo from "../../components/user/UserInfo";
import { RootState } from "../../store/modules";
import Router from "next/router";
import { delCookie } from "../../utils/common";
import { setSignOutThunk } from "../../store/modules/user";
import { useEffect } from "react";
const MyInfoContainer = () => {
  const { user } = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [userEdit, setUserEdit] = useState(user);
  const [inputState, setInputState] = useState(false);

  useEffect(() => {
    setUserEdit(user)
  }, [user])

  const toggleState = () => setInputState(!inputState);

  const onChangeUserData = (e: any) => {
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
      default:
        break;
    }
  };
  const updateAccount = async () => {
    const response = await updateUserInfo(userEdit);
    if (response.status === 200) {
      alert("내정보 변경 성공");
    }
  };

  const deleteAccount = async () => {
    const response = await deleteUser(user.userId);
    if (response.status === 200) {
      await dispatch(setSignOutThunk());
      await delCookie("access-token");
      Router.push("/");
    }
  };
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
