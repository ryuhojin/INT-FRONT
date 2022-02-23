import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const EditStyle = styled.div`
    display:flex;
    align-self:center;
    flex-direction: column;
    align-items: center;
    margin-top:1.5rem;

    div{
        width:50%;
        display:flex;
        flex-direction: column;
        margin-top:1.5rem;
        @media only screen and (max-width: 550px) {
            width:100%;
        }
    }
    h1{
        font-size:1.875rem;
        line-height:2.25rem;
        font-weight:600;
    }
    input {
        font-size:1rem;
        padding-left:1rem;
        height:40px;
        width:-webkit-fill-available
    }
    .mx {
        margin:0 1rem;
    }
    .h-40 {
        height:40px
    }
    .h-80 {
        height:80px;
    }
    .mt-1half{
        margin-top:1.5rem;
    }
    .mt-1{
        margin-top:1rem;
    }
    .mt-half{
        margin-top:0.5rem;
    }
    textarea {
        padding:1rem;
        font-size:1rem;
        height: 80px;
    }
    
  
`;
const Edit = ({ user, editUser, onEdit, onCancel }: any) => {
    return <EditStyle>
        <h1>정보 수정</h1>
        <div>
            <input type="text" className="mx mt-1half h-40" value={user?.name} onChange={editUser} name="name" placeholder="이름을 입력해주세요" />
            <textarea className="mt-1 mx h-80" value={user?.introduction} onChange={editUser} name="introduction" placeholder="소개를 입력해주세요" />
            <table className="mt-1 mx">
                <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>깃허브</td>
                        <td><input type="text" value={user?.gitUrl} onChange={editUser} name="git" className="mt-1" placeholder="깃허브를 입력해주세요" /></td>
                    </tr>
                    <tr>
                        <td>블로그</td>
                        <td><input type="text" value={user?.webSiteUrl} onChange={editUser} name="website" className="mt-1" placeholder="블로그를 입력해주세요" /></td>
                    </tr>
                </tbody>
            </table>
            <table className="mx">
                <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" value={user?.email} onChange={editUser} name="email" className="mt-1" placeholder="이메일을 입력해주세요" /></td>
                    </tr>
                    <tr>
                        <td>소　속</td>
                        <td><input type="text" value={user?.groupName} onChange={editUser} name="group"  className="mt-1" placeholder="소속을 입력해주세요" /></td>
                    </tr>
                </tbody>
            </table>
            <Button className="mx mt-1half" fullWidth onClick={onEdit}>수정완료</Button>
            <Button className="mx mt-half" fullWidth onClick={onCancel}>수정취소</Button>
            <br />
        </div>
    </EditStyle>
}
export default React.memo(Edit);