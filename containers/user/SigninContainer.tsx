import Router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import SignIn from "components/user/SignIn"
import { authAtom } from "store/atom";
import { useAuth } from "utils/auth";

const SigninContainer = () => {
    const auth = useAuth();
    const authentication = useRecoilValue(authAtom);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSignin = async (e: any) => {
        e.preventDefault();
        await auth.signin({ username: username, password: password });
        Router.back();
    };
    useEffect(() => {
        if (!authentication) return;
        Router.push('/')
    })
    return <><SignIn
        username={username}
        password={password}
        setUsername={(e: any) => {
            e.preventDefault();
            setUsername(e.target.value);
        }}
        setPassword={(e: any) => {
            e.preventDefault();
            setPassword(e.target.value);
        }}
        onSignup={() => { Router.push('/user/signup') }}
        onSubmit={onSignin} /></>
}
export default SigninContainer;