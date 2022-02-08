import Signup from "../../components/user/Signup";
import { useState } from "react";
import { checkName, checkUserId, SignUp } from "../../api/modules/user";
import Router from "next/router";
const SignupContainer = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [gitUrl, setGitUrl] = useState("");
  const [webSiteUrl, setWebSiteUrl] = useState("");
  const [group, setGroup] = useState("");

  const [isId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);

  const idChk = async () => {
    const { data } = await checkUserId(userId);
    if (data.duplicateYn === true) {
      alert("중복된 아이디가 있습니다");
      setIsId(false);
    } else {
      alert("중복확인 되었습니다");
      setIsId(true);
    }
  };
  const nameChk = async () => {
    const { data } = await checkName(name);
    if (data.duplicateYn === true) {
      alert("중복된 닉네임 있습니다");
      setIsName(false);
    } else {
      alert("중복확인 되었습니다");
      setIsName(true);
    }
  };

  const onSingup = async() => {
    if (!isName || !isId) {
      alert("중복체크를 통과하세요");
      return;
    }
    if (password != passwordChk) {
      alert("패스워드가 일치하지 않습니다.");
      return;
    }
    if (
      userId === "" ||
      password === "" ||
      passwordChk === "" ||
      name === "" ||
      email === ""
    ) {
      alert("필수 값을 입력하세요");
      return;
    }
    const response = await SignUp({
      userId: userId,
      email: email,
      password: password,
      name: name,
      introduction: introduction,
      gitUrl: gitUrl,
      webSiteUrl: webSiteUrl,
    });
    if(response.status === 200){
        Router.push('/user')
    }
    console.log(response)
  };
  return (
    <Signup
      userId={userId}
      setUserId={(e: any) => {
        e.preventDefault();
        setUserId(e.target.value);
        setIsId(false);
      }}
      password={password}
      setPassword={(e: any) => {
        e.preventDefault();
        setPassword(e.target.value);
      }}
      passwordChk={passwordChk}
      setPasswordChk={(e: any) => {
        e.preventDefault();
        setPasswordChk(e.target.value);
      }}
      name={name}
      setName={(e: any) => {
        e.preventDefault();
        setName(e.target.value);
        setIsName(false);
      }}
      email={email}
      setEmail={(e: any) => {
        e.preventDefault();
        setEmail(e.target.value);
      }}
      gitUrl={gitUrl}
      setGitUrl={(e: any) => {
        e.preventDefault();
        setGitUrl(e.target.value);
      }}
      webSiteUrl={webSiteUrl}
      setWebSiteUrl={(e: any) => {
        e.preventDefault();
        setWebSiteUrl(e.target.value);
      }}
      introduction={introduction}
      setIntroduction={(e: any) => {
        e.preventDefault();
        setIntroduction(e.target.value);
      }}
      group={group}
      setGroup={(e: any) => {
        e.preventDefault();
        setGroup(e.target.value);
      }}
      isId={isId}
      idChk={idChk}
      isName={isName}
      nameChk={nameChk}
      onSingup={onSingup}
    />
  );
};
export default SignupContainer;
