import React from 'react';
import styled from 'styled-components'
const FooterStyle = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:0.7em;
    line-height: 1rem;
    p{
        margin:0;
    }
`
const Footer = () => {
    return <FooterStyle>
        <p>Created By Front : 류호진 | Back : 최성영</p>
        <p>사이트 관련 문의는 아래 메일로 연락 주세요</p>
        <p>interarea@naver.com</p>
    </FooterStyle>
}
export default React.memo(Footer);