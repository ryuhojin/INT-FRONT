import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../api/modules/user";
import UserInfo from "../../components/user/UserInfo";
import { RootState } from "../../store/modules";
import Router from "next/router";
import { delCookie } from "../../utils/common";
import { setSignOutThunk } from "../../store/modules/user";

const MyInfoContainer = () => {
    const { user } = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch();
    const [inputState, setInputState] = useState(false);

    const deleteAccount = async () => {
        const response = await deleteUser(user.userId)
        if (response.status === 200) {
            await dispatch(setSignOutThunk())
            await delCookie('access-token')
            Router.push('/')
        }
    }
    return <UserInfo paramsUser={user} inputState={inputState} deleteAccount={deleteAccount} toggleState={() => { setInputState(true); }} />
}
export default MyInfoContainer;