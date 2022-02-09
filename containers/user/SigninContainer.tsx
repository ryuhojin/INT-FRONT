import Router from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SignIn from "../../components/user/SignIn";
import { setSignInThunk } from "../../store/modules/user";

const SigninContainer = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSignin = async (e: any) => {
        e.preventDefault();
        await dispatch(setSignInThunk({ username: username, password: password }));
    };

    return <SignIn
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
        onSubmit={onSignin} />
}
export default SigninContainer;