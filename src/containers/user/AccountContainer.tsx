import { checkUserId, checkName, register } from "api/modules/user";
import { useState } from "react";
import Account from "src/components/user/Account";
import Router from "next/router";
import { useMessage } from "utils/message";
import { useAuth } from "utils/auth";
const AccountContainer = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [gitUrl, setGitUrl] = useState("");
  const [webSiteUrl, setWebSiteUrl] = useState("");
  const [groupName, setGroupName] = useState("");

  const [isId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);
  const messageFn = useMessage();
  const auth = useAuth();
  const idChk = async () => {
    const { data } = await checkUserId(userId);
    if (data.duplicateYn === true) {
      messageFn.show("중복된 아이디가 있습니다.");
      setIsId(false);
    } else {
      messageFn.show("중복확인 되었습니다.");
      setIsId(true);
    }
  };

  const nameChk = async () => {
    const { data } = await checkName(name);
    if (data.duplicateYn === true) {
      messageFn.show("중복된 닉네임이 있습니다.");
      setIsName(false);
    } else {
      messageFn.show("중복확인 되었습니다.");
      setIsName(true);
    }
  };
  const onSingup = async () => {
    if (!isName || !isId) {
      messageFn.show("중복체크를 통과해주세요.");
      return;
    }
    if (password != passwordChk) {
      messageFn.show("패스워드가 일치하지 않습니다.");
      return;
    }
    if (
      userId === "" ||
      password === "" ||
      passwordChk === "" ||
      name === "" ||
      email === ""
    ) {
      messageFn.show("필수값을 입력하세요.");
      return;
    }
    auth.signup({
      userId: userId,
      email: email,
      password: password,
      name: name,
      introduction: introduction,
      gitUrl: gitUrl,
      webSiteUrl: webSiteUrl,
      groupName: groupName,
    });
    Router.push("/");
  };
  return (
    <Account
      userId={userId}
      password={password}
      passwordChk={passwordChk}
      email={email}
      name={name}
      gitUrl={gitUrl}
      webSiteUrl={webSiteUrl}
      groupName={groupName}
      introduction={introduction}
      isId={isId}
      isName={isName}
      setUserId={(e: any) => {
        e.preventDefault();
        setUserId(e.target.value);
        setIsId(false);
      }}
      setPassword={(e: any) => {
        e.preventDefault();
        setPassword(e.target.value);
      }}
      setPasswordChk={(e: any) => {
        e.preventDefault();
        setPasswordChk(e.target.value);
      }}
      setEmail={(e: any) => {
        e.preventDefault();
        setEmail(e.target.value);
      }}
      setName={(e: any) => {
        e.preventDefault();
        setName(e.target.value);
        setIsName(false);
      }}
      setGitUrl={(e: any) => {
        e.preventDefault();
        setGitUrl(e.target.value);
      }}
      setWebSiteUrl={(e: any) => {
        e.preventDefault();
        setWebSiteUrl(e.target.value);
      }}
      setGroupName={(e: any) => {
        e.preventDefault();
        setGroupName(e.target.value);
      }}
      setIntroduction={(e: any) => {
        e.preventDefault();
        setIntroduction(e.target.value);
      }}
      idChk={idChk}
      nameChk={nameChk}
      onSingup={onSingup}
    />
  );
};
export default AccountContainer;
