import Router from "next/router";
import { EventHandler, ReactEventHandler, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Login from "src/components/user/Login";
import { authAtom } from "store/atom";
import { useAuth } from "utils/auth";
import { useMessage } from "utils/message";

const LoginContainer = () => {
    const message = useMessage();
    const auth = useAuth();
    const authentication = useRecoilValue(authAtom);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!authentication) return;
        Router.push('/')
    }, [])

    const onChangeUsername = (e: any) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await auth.signin({ username: username, password: password })
            Router.back();
        } catch (e) {
            message.show("로그인 정보를 다시 확인해주세요.")
        }
    }
    const onSignUp = () => {
        Router.push('/user/signup');
    }


    return <Login username={username}
        password={password}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
        onSignUp={onSignUp} />
}
export default LoginContainer;