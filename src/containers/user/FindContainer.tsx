import { callCert, checkCert, changWithCert } from "api/modules/user";
import Router from "next/router";
import { useEffect, useState } from "react";
import Find from "src/components/user/Find";
import { useMessage } from "utils/message";

const FindContainer = () => {
  const messageFn = useMessage();
  const [step, setStep] = useState<number>(1);
  const [userId, setUserId] = useState("");
  const [authNum, setAuthNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");

  const sendCertificateEmail = async () => {
    if (userId.trim() == "") return;
    try {
      const response = await callCert(userId);
      if ((response.status = 200)) {
        setStep(2);
      }
    } catch (e) {
      messageFn.show("존재하지 않는 사용자입니다");
    }
  };
  const checkCertificateAuthNum = async () => {
    if (userId.trim() == "" || authNum.trim() == "") return;
    try {
      const response = await checkCert(userId, authNum);
      if (response.status == 200 && response.data.successYn == true) {
        setStep(3);
      } else {
        messageFn.show("인증번호가 올바르지 않습니다.");
      }
    } catch (e) {
      messageFn.show("인증번호가 올바르지 않습니다.");
    }
  };
  const changePassword = async () => {
    if (
      userId.trim() == "" ||
      authNum.trim() == "" ||
      password.trim() == "" ||
      passwordChk.trim() == ""
    )
      return;
    if (password !== passwordChk) {
      messageFn.show("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    try {
      const response = await changWithCert(userId, authNum, password);
      if (response.status == 200) {
        messageFn.show("비밀번호 변경이 완료되었습니다.");
        Router.push("/");
      }
    } catch (e) {
      messageFn.show("올바르지 않은 아이디 혹은 인증번호 입니다.");
    }
  };
  useEffect(() => {
    if (step == 1) {
      return;
    } else if (step == 2) {
      messageFn.show("인증번호가 입력해둔 이메일로 전송되었습니다.");
      return;
    } else {
      step == 3;
    }
    {
      messageFn.show("인증번호가 일치합니다. 패스워드를 변경해주세요.");
      return;
    }
  }, [step]);
  return (
    <Find
      step={step}
      userId={userId}
      setUserId={(e: any) => setUserId(e.target.value)}
      authNum={authNum}
      setAuthNum={(e: any) => setAuthNum(e.target.value)}
      password={password}
      setPassword={(e: any) => setPassword(e.target.value)}
      passwordChk={passwordChk}
      setPasswordChk={(e: any) => setPasswordChk(e.target.value)}
      sendCertificateEmail={sendCertificateEmail}
      checkCertificateAuthNum={checkCertificateAuthNum}
      changePassword={changePassword}
    />
  );
};
export default FindContainer;
