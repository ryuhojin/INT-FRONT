import styled, { css, keyframes } from "styled-components";
import { MdClose } from 'react-icons/md'
import { useRecoilState } from "recoil";
import { mobileMenu } from "store/atom";
import { useAuth } from "utils/auth";
import Router from "next/router";
const fadeIn = keyframes`
    from {
        opacity:0
    } 
    to {
        opactiy:1
    }
`;
const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;
const MenuStyle = styled.div`
    display:none;
    @media only screen and (max-width: 550px) {
        ${(props: { isOpen: boolean }) =>
        props.isOpen &&
        css`display:flex;`}
        z-index:99;
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-name: ${fadeIn};
        animation-fill-mode: forwards;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100vh;
        background:rgba(0,0,0,0.8);
        color:#fff;
        position: fixed;
        div:first-child {
            position: absolute;
            right:30px;
            top:30px;
        }
        h1{
            font-size:2em;
            cursor:pointer;
        }
        h1 + h1 {
            margin-top:1.5rem;
        }
    }

`;

const Menu = () => {
    const auth = useAuth();
    const [state, setState] = useRecoilState(mobileMenu);
    const closeMenu = () => {
        setState(false);
    }
    /**
     * @name onLogout
     * @description 로그아웃 후 홈페이지로 전환
     */
    const onLogout = () => {
        auth.signout();
        closeMenu();
        Router.push('/index2')
    }
    /**
     * @name onStatus
     * @description 로그인 정보 페이지로 전환
     */
    const onStatus = () => {
        closeMenu();
        Router.push('/user/info2')
    }
    /**
     * @name onWrite
     * @description 글쓰기 페이지로 전환
     */
    const onWrite = () => {
        closeMenu();
        Router.push('/issue/write2')
    }
    return <MenuStyle isOpen={state}>
        <div onClick={closeMenu}><MdClose size={30} /></div>
        <h1 onClick={onWrite}>이슈 등록</h1>
        <h1 onClick={onStatus}>내 정보</h1>
        <h1 onClick={onLogout}>로그아웃</h1>
    </MenuStyle>
}
export default Menu;