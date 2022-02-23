import styled from 'styled-components'
import { MdListAlt, MdLogin } from 'react-icons/md'
const HeaderStyle = styled.div`
    height:100%;
    padding:0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`
const Logo = styled.h1`
    
`
const PCMenu = styled.div`
    display : flex ;
    div {
        align-items: center;
        display: flex;
    }
    div + div {
        margin-left:1rem;
    } 
`

const Header = () => {
    return <HeaderStyle>
        <Logo>NOT WORKING</Logo>
        <PCMenu>
            <div><MdListAlt />&nbsp;목록</div>
            <div><MdLogin />&nbsp;로그인</div>
        </PCMenu>
    </HeaderStyle>
}
export default Header;