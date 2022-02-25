import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const MyInfoStyle = styled.div`
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
    hr{
        margin-top:1.5rem;
        border:1px solid #e6e6e6;
        width:100%;
    }
    .margin {
        margin-top:2rem;
        margin-left:1rem;
        margin-right:1rem;
    }
    .margin-x {
        margin-left:1rem;
        margin-right:1rem;
    }
    h1{
        font-size:1.875rem;
        line-height:2.25rem;
        font-weight:600;
    }
    h2{
        font-size:1.5rem;
        line-height: 2rem;
        justify-self: flex-start;
    }
    .font-normal {
        font-size:1.125rem;
        line-height:1.75rem;
    }
    button{
        font-weight:600;
        margin-left:1rem !important;
        margin-right:1rem;
        margin-top:2rem;
        height:40px;
    }
`;


const Myinfo = ({ onEdit, user }: { onEdit: any, user: any }) => {
    return <MyInfoStyle>
        <h1>내 정보</h1>
        <div>
            <h2 className="margin">{user?.name}( LV.1 )님 반갑습니다.</h2>
            <span className="margin-x font-normal">{user?.introduction}</span>
            <hr />
            <table className="margin font-normal">
                <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>깃허브</td>
                        <td>{user?.gitUrl}</td>
                    </tr>
                    <tr>
                        <td>블로그</td>
                        <td>{user?.webSiteUrl}</td>
                    </tr>
                </tbody>
            </table>
            <table className="margin font-normal">
                <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>포인트</td>
                        <td>{user?.point}</td>
                    </tr>
                    <tr>
                        <td>호감도</td>
                        <td>{user?.popularity}</td>
                    </tr>
                </tbody>
            </table>
            <table className="margin font-normal">
                <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>이메일</td>
                        <td>{user?.email}</td>
                    </tr>
                    <tr>
                        <td>소　속</td>
                        <td>{user?.groupName}</td>
                    </tr>
                </tbody>
            </table>
            <Button fullWidth onClick={onEdit}>수정</Button>
            <br />
        </div>
    </MyInfoStyle>
}
export default React.memo(Myinfo);