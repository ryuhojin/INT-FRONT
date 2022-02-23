import { JSXElementConstructor } from "react";
import styled from "styled-components";

const MainLayoutStyle = styled.div`
    display:grid;
    height:100vh;
    grid-template-columns: 1fr;
    grid-template-rows:minmax(80px,auto) 1fr minmax(100px,auto);
    grid-template-areas:
    "nav"
    "main"
    "footer";
    grid-gap : 0.2rem; 
`;
const NavStyle = styled.header`
    border:1px solid gray;
    grid-area:nav;
`
const MainStyle = styled.main`
    border:1px solid gray;
    grid-area:main;
`
const FooterStyle = styled.footer`
    grid-area:footer;
    border:1px solid gray;
`

const MainLayout = ({ header, home, footer }: any) => {
    return <MainLayoutStyle>
        <NavStyle>{header}</NavStyle>
        <MainStyle>{home}</MainStyle>
        <FooterStyle>{footer}</FooterStyle>
    </MainLayoutStyle>
}
export default MainLayout;