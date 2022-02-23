import Router from "next/router";
import { useRecoilValue } from "recoil";
import Myinfo from "src/components/user/MyInfo";
import { authAtom } from "store/atom";

const MyinfoContainer = () => {
    const user = useRecoilValue(authAtom)
    const onEdit = () => {
        Router.push('/user/edit')
    }

    return <Myinfo onEdit={onEdit} user={user} />
}
export default MyinfoContainer;