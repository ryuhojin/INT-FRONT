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
const Login = ({ username, password, onChangeUsername, onChangePassword, onSubmit, onGithubLogin }: any) => {
    return <LoginStyle>
        <form onSubmit={onSubmit}>
            <input type="text" value={username} onChange={onChangeUsername} placeholder="아이디를 입력해주세요." />
            <input type="password" value={password} onChange={onChangePassword} autoComplete="false" placeholder="비밀번호를 입력해주세요." />
            <Button fullWidth style={{ 'margin-top': '1.5rem' }}>로그인</Button>
        </form>
        <Button onClick={onGithubLogin} fullWidth style={{ 'margin-top': '0.5rem' }}>GITHUB 로그인</Button>
    </LoginStyle >
}
export default Login;