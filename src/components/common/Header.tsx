import styled from 'styled-components'
import { MdListAlt, MdLogin, MdLogout, MdPermIdentity, MdMenu } from 'react-icons/md'
import React from 'react'
import { mobileMenu } from 'store/atom'
import { useSetRecoilState } from 'recoil'
const HeaderStyle = styled.div`
    height:100%;
    padding:0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  

`
const LogoStyle = styled.h1`
    cursor:pointer;
`
const MenuStyle = styled.div`
    display : flex ;
    div {
        align-items: center;
        display: flex;
        cursor:pointer;
    }
    div + div {
        margin-left:1rem;
    } 
    .menu {
        display:none;
    }
    @media only screen and (max-width: 550px) {
        .info, .logout {
            display:none;
        }
        .menu {
            display:flex;
        }
    }
`

const Menu = (isLoggedIn: boolean, onLogin: any, onLogout: any, onStatus: any) => {
    const setState = useSetRecoilState(mobileMenu);
    const onMenu = () => {
        setState(true);
    }
    return isLoggedIn ? <><div className='menu' onClick={onMenu}><MdMenu />&nbsp;메뉴</div><div className='info' onClick={onStatus}><MdPermIdentity />&nbsp;내 정보</div><div className='logout' onClick={onLogout}><MdLogout />&nbsp;로그아웃</div></> : <div className='login' onClick={onLogin}><MdLogin />&nbsp;로그인</div>
}
const Header = ({ isLoggedIn, onHome, onLogin, onLogout, onStatus, onList }: { isLoggedIn: boolean, onHome: any, onLogin: any, onLogout: any, onStatus: any, onList: any }) => {
    return <HeaderStyle>
        <LogoStyle onClick={onHome}>NOT WORKING</LogoStyle>
        <MenuStyle>
            <div className='list' onClick={onList}><MdListAlt />&nbsp;목록</div>
            {Menu(isLoggedIn, onLogin, onLogout, onStatus)}
        </MenuStyle>
    </HeaderStyle>
}
export default React.memo(Header);