import styled from "styled-components";
import Button from "../common/Button";

const AccountStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  @media only screen and (min-width: 550px) {
    margin: 0 auto;
    width: 35%;
  }
  h1{
    text-align:center;
  }
  input {
      height:2rem;
      padding-left:1rem;
      margin-top: 1rem;
  }
  textarea{
      margin-top:1rem;
      height:4rem;
      padding:1rem;
  }
`;
const Account = ({ userId,
    password,
    passwordChk,
    email,
    name,
    gitUrl,
    webSiteUrl,
    groupName,
    introduction,
    setUserId,
    setPassword,
    setPasswordChk,
    setEmail,
    setName,
    setGitUrl,
    setWebSiteUrl,
    setGroupName,
    setIntroduction,
    onSingup,
    idChk,
    nameChk,
    isId,
    isName }: any) => {
    return <AccountStyle>
        <h1>회원가입</h1>
        <input onChange={setUserId} value={userId} type="text" placeholder="아이디를 입력해주세요" name="userId" />
        <Button color={isId ? 'red' : 'gray'} fullWidth onClick={idChk}>{!isId ? '아이디 중복확인' : '확인완료'}</Button>
        <input onChange={setPassword} value={password} type="password" placeholder="비밀번호를 입력해주세요" name="password" />
        <input onChange={setPasswordChk} value={passwordChk} type="password" placeholder="비밀번호 확인을 입력해주세요" name="passwordChk" />
        <input onChange={setEmail} value={email} type="email" placeholder="이메일을 입력해주세요" name="email" />
        <input onChange={setName} value={name} type="name" placeholder="이름을 입력해주세요" name="name" />
        <Button color={isName ? 'red' : 'gray'} fullWidth onClick={nameChk}>{!isName ? '닉네임 중복확인' : '확인완료'}</Button>
        <input onChange={setGitUrl} value={gitUrl} type="text" placeholder="깃 주소를 입력해주세요" name="gitUrl" />
        <input onChange={setWebSiteUrl} value={webSiteUrl} type="text" placeholder="개인 블로그 주소를 입력해주세요" name="webSiteUrl" />
        <input onChange={setGroupName} value={groupName} type="text" placeholder="소속명을 입력해주세요" name="groupName" />
        <textarea onChange={setIntroduction} value={introduction} placeholder="자기소개를 입력해주세요" name="introduction" />
        <Button fullWidth onClick={onSingup}>회원 가입 </Button>
    </AccountStyle>
}
export default Account;