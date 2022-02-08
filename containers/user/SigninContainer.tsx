import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../../components/user/SignIn";
import { RootState } from "../../store/modules";
import { setSignInThunk } from "../../store/modules/user";

const SigninContainer = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useSelector((state: RootState) => state.user.user)
    useEffect(() => {
        if (user.email) {
            Router.push("/");
        }
    }, [user])
    const onSignin = async (e: any) => {
        e.preventDefault();
        await dispatch(setSignInThunk({ username: username, password: password }));
        Router.push("/");
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
        onSignup={()=>{Router.push('/user/signup')}}
        onSubmit={onSignin} />
}
export default SigninContainer;