import Router from "next/router";
import { useSelector } from "react-redux";
import UserMenu from "../../components/base/UserMenu";
import { RootState } from "../../store/modules";

const UserMenuContainer = ({ toggleTab }: any) => {
    const { user } = useSelector((state: RootState) => state.user.user)

    const onGetIssueList = () => Router.push('/issue')
    const onSetIssue = () => Router.push('/issue/write')
    const onSignin = () => { Router.push('/user') }

    return <UserMenu onGetIssueList={onGetIssueList} toggleTab={toggleTab} onSetIssue={onSetIssue} onSignin={onSignin} user={user} />
}
export default UserMenuContainer;