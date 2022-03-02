import { deleteUser } from "api/modules/user";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import Router from "next/router";
import { useRecoilValue } from "recoil";
import Myinfo from "src/components/user/MyInfo";
import { authAtom } from "store/atom";
import { useAuth } from "utils/auth";

const MyinfoContainer = () => {
    const user = useRecoilValue(authAtom)
    const auth = useAuth();
    const onEdit = () => {
        Router.push('/user/edit')
    }
    const onDelete = (userId: string) => {
        auth.deluser(userId);
        Router.push('/')
    }

    return <Myinfo onEdit={onEdit} onDelete={onDelete} user={user} />
}
export default MyinfoContainer;