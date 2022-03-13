import styled from "styled-components";
import Button from "../common/Button";

const LoginStyle = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self:center;
    width:30%;
    margin: 0 auto;
    @media only screen and (max-width: 550px) {
        width:100%;
    }
    form{
        display:flex;
        flex-direction: column;
      width:100%;
        input {
            margin:0 1rem;
            padding-left:1rem;
            height:2.25rem;
        }
        input + input:not(:last-child) {
            margin-top:0.5rem;
        }
        input:last-child{
            margin-top:1rem;
        }
    }
    button{
        margin-left:1rem !important;
        margin-right:1rem;
      
    }
  
`;
const Login = ({ username, password, onChangeUsername, onChangePassword, onSubmit, onSignUp, onFindPw }: any) => {
    return <LoginStyle>
        <form onSubmit={onSubmit}>
            <input type="text" value={username} onChange={onChangeUsername} placeholder="아이디를 입력해주세요." />
            <input type="password" value={password} onChange={onChangePassword} autoComplete="false" placeholder="비밀번호를 입력해주세요." />
            <Button fullWidth style={{ marginTop: '1.5rem' }}>로그인</Button>
        </form>
        <Button fullWidth style={{ marginTop: '0.5rem' }} onClick={() => {
            window.location.href =
            "http://52.79.72.35:8080/oauth2/authorization/github";
            //"http://localhost:8080/oauth2/authorization/github";
            //"https://notworking-api.link/oauth2/authorization/github";
        }}>GITHUB 로그인</Button>
        <br />
        <span><span style={{ cursor: 'pointer' }} onClick={onSignUp}>회원가입</span>&nbsp;/&nbsp;<span style={{ cursor: 'pointer' }} onClick={onFindPw}>비밀번호 찾기</span></span>
    </LoginStyle >
}
export default Login;