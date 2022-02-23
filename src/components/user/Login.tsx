import styled from "styled-components";

const LoginStyle = styled.div`
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;

    form{
        display:flex;
        flex-direction: column;
        margin:0 1rem;

        input[type='text'], input[type='password'] {
            padding-left:1rem;
            width:300px;
            height:50px;
        }

        input[type='submit'], input[type='button']{
            height:50px;
        }

        input + input {
            margin-top:1rem;
        }

        input:nth-child(2), input:nth-child(4) {
            margin-top:0.5rem;
        }
    }
`;
const Login = ({ username, password, onChangeUsername, onChangePassword, onSubmit }: any) => {
    return <LoginStyle>
        <form onSubmit={onSubmit}>
            <input type="text" value={username} onChange={onChangeUsername} placeholder="아이디를 입력해주세요." />
            <input type="password" value={password} onChange={onChangePassword} autoComplete="false" placeholder="비밀번호를 입력해주세요." />
            <input type="submit" value="로그인" />
            <input type="button" value="GITHUB 로그인" />
        </form>
    </LoginStyle>
}
export default Login;