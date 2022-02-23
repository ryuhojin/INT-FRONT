import { checkName } from "api/modules/user";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Edit from "src/components/user/Edit";
import { authAtom } from "store/atom";


const EditContainer = () => {
    const [user, setUser]: [user: any, setUser: any] = useRecoilState(authAtom)
    const [userState, setUserState] = useState(user);

    useEffect(() => {
        setUserState(user);
    }, [])

    const setEditUser = (e: any) => {
        e.preventDefault();
        switch (e.target.name) {
            case "name":
                setUserState({ ...userState, ... { name: e.target.value } });
                break;
            case "introduction":
                setUserState({ ...userState, ... { introduction: e.target.value } })
                break;
            case "git":
                setUserState({ ...userState, ... { gitUrl: e.target.value } })
                break;
            case "website":
                setUserState({ ...userState, ... { webSiteUrl: e.target.value } })
                break;
            case "email":
                setUserState({ ...userState, ... { email: e.target.value } })
                break;
            case "group":
                setUserState({ ...userState, ... { groupName: e.target.value } })
                break;
            default: break;
        }
    }
    const onEdit = async () => {
        const { data } = await checkName(userState.name);
        if (data.adoptYn) {
            return;
        }
    }
    const onCancel = () => {
        Router.push('/user/info2')
    }
    return <Edit user={userState} onEdit={onEdit} editUser={setEditUser} onCancel={onCancel} />
}
export default EditContainer;