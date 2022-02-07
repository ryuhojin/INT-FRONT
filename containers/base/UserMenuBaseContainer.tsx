import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import UserBaseMenu from "../../components/base/UserBaseMenu";
import { RootState } from "../../store/modules";
import { setSignOutThunk } from "../../store/modules/user";
import { delCookie } from "../../utils/common";
const UserMenuBaseContainer = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.user.user)

    const onGetIssueList = () => Router.push('/issue')
    const onSetIssue = () => Router.push('/issue/write')
    const onSignin = () => { Router.push('/user') }
    const onGetUserInfo = () => Router.push('/user/info')

    const onSignout = async () => {
        await dispatch(setSignOutThunk())
        await delCookie('access-token')
        Router.push('/')
    }
    
    return <UserBaseMenu onGetIssueList={onGetIssueList} onSetIssue={onSetIssue} onSignin={onSignin} onSignout={onSignout} onGetUserInfo={onGetUserInfo} user={user} />
}
export default UserMenuBaseContainer;