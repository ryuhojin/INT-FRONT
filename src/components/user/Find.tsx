import styled from 'styled-components';
import Button from '../common/Button';

const StyledFind = styled.div`
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
    div{
        display: flex;
        flex-direction: column;
        width:90%;
    }
    input {
        height: 2.25rem;
        font-size: 1rem;
        padding-left: 1rem;
    }
    input + input {
        margin-top:1rem;
    }
`;
const Find = ({
    step,
    userId,
    setUserId,
    authNum,
    setAuthNum,
    password,
    setPassword,
    passwordChk,
    setPasswordChk,
    sendCertificateEmail,
    checkCertificateAuthNum,
    changePassword
}: any) => {
    if (step == 1) {
        return <StyledFind>
            <div>
                <input value={userId} onChange={setUserId} type="text" placeholder="고객님의 아이디를 입력해주세요." />
                <Button fullWidth onClick={sendCertificateEmail}>확인</Button>
            </div>
        </StyledFind>
    }
    else if (step == 2) {
        return <StyledFind>
            <div>
                <input type="text" value={authNum} onChange={setAuthNum} placeholder='받은 인증번호를 입력해주세요' />
                <Button fullWidth onClick={checkCertificateAuthNum}>확인</Button>
            </div>
        </StyledFind>
    }
    return <StyledFind>
        <div>
            <input value={userId} onChange={setUserId} disabled type="text" placeholder='고객님의 아이디를 입력해주세요.' />
            <input value={password} onChange={setPassword} type="password" placeholder='변경할 비밀번호를 입력해주세요.' />
            <input value={passwordChk} onChange={setPasswordChk} type="password" placeholder='변경할 비밀번호를 입력해주세요.(확인)' />
            <input value={authNum} onChange={setAuthNum} type="text" placeholder='인증번호를 입력해주세요.' />
            <Button fullWidth onClick={changePassword}>확인</Button>
        </div>
    </StyledFind>
}
export default Find;