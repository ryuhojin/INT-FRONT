import Router from "next/router";
import { useState } from "react";
import SignIn from "../../components/user/SignIn";
import { useAuth } from "../../utils/auth";

const SigninContainer = () => {
    const auth = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSignin = async (e: any) => {
        e.preventDefault();
        await auth.signin({ username: username, password: password });
        Router.back();
    };
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