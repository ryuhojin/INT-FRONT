import Router from "next/router";
import UserMenu from "components/base/UserMenu";

const UserMenuContainer = ({ toggleTab, user }: any) => {
    const onGetIssueList = () => Router.push('/issue')
    const onSetIssue = () => Router.push('/issue/write')
    const onSignin = () => { Router.push('/user') }

    return <UserMenu onGetIssueList={onGetIssueList} toggleTab={toggleTab} onSetIssue={onSetIssue} onSignin={onSignin} user={user} />
}
export default UserMenuContainer;