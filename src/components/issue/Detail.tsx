import styled from "styled-components";
import TipTap from "../common/TipTap";
import { FaGithub, FaBlogger, FaRegThumbsUp } from 'react-icons/fa'
import { RiChatFollowUpLine } from 'react-icons/ri'
import { MdRecommend } from 'react-icons/md'
import Button from "../common/Button";
import Router from "next/router";
const DetailStyle = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    margin:0 1rem;
    @media only screen and (min-width: 550px) {
        margin: 0 auto;
        width:35%;
    }
`;
const DetailTitleStyle = styled.div`
    border-radius: 10px;
    h1{
        margin:0.5rem 0 1rem 0;
        font-weight: bold;
    }
    .strong {
        font-weight: 600;
    }
`
const DetailTagStyle = styled.div`
    margin: 1rem 0 0.5rem 0;
    border-radius: 10px;
    span {
        color:white;
        padding: 0.2rem 0.5rem;
        border-radius:10px;
        background:rgba(0,0,0,0.5);
        font-size:0.8rem;
        line-height: 1.8rem;
    }
    span + span {
        margin-left:0.3rem;
    }
`

const DetailContentStyle = styled.div`
    margin:0.5rem 0;
    border-radius: 10px;
    line-height:1.5rem;
`
const DetailProfileStyle = styled.div`
    h2{
        display:flex;
        justify-content: space-between;
    }
`
const SolutionStyle = styled.div`
    border:1px solid black;
    padding:0.5rem;
    margin-top:1rem;
    .flex-between{
        display: flex;
        justify-content: space-between;
        font-size:0.8rem;
    }
`
const CommentStyle = styled.div`
    margin-top:0.5rem;
    textarea {
        width: -webkit-fill-available;
    }
`
const ReplyStyle = styled.div`
    p{
        font-size:0.7rem;
    }
    .flex-between{
        display: flex;
        justify-content: space-between;
        font-size:0.7rem;
    }
`
const Detail = ({ detail }: any) => {
    return <DetailStyle>
        <DetailTitleStyle>
            <h2 style={{cursor:'pointer','margin':'2rem 0'}} onClick={() => Router.back()}>← 뒤로가기</h2>
            <h1>{detail.title}</h1>
            <span><strong>{detail.developer.name}</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<span>{detail.modifiedDate.substring(0, 10).replace(/-/gi, '.')}</span></span>
            <br />
        </DetailTitleStyle>
        <DetailTagStyle>
            {detail.hashtags && detail.hashtags.map((value: any, index: any) => {
                return <span key={index}># {value}</span>
            })}
        </DetailTagStyle>
        <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
        <DetailContentStyle>
            <TipTap isEditable={false} height="300px" mode="reader" content={detail.content} />
        </DetailContentStyle>
        <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
        <DetailProfileStyle>
            <h2><span>{detail.developer.name}&nbsp;<RiChatFollowUpLine /></span><span><FaGithub />&nbsp;&nbsp;<FaBlogger /></span></h2>
            <h4>{detail.developer.introduction}</h4>
        </DetailProfileStyle>
        <hr style={{ border: "1px solid #d1d1d1", width: "100%" }} />
        <h3 style={{ margin: '0.5rem 0 1rem 0' }}>SOLUTION</h3>
        <TipTap isEditable={true} height="150px" mode="editor" />
        <Button fullWidth size="medium">솔루션 등록</Button>
        {detail.solutions && detail.solutions.map((value: any, index: any) => {
            return <>
                <SolutionStyle>
                    <TipTap isEditable={false} height="100%" mode="reader" content={value.content} key={index} />
                    <p className="flex-between">
                        <strong>{value.developer.name}{value.adoptYn ? <span style={{ color: 'orange' }}>&nbsp;·&nbsp;채택됨</span> : <></>}</strong>
                        <span><FaRegThumbsUp size={12} /> {value.recommendationCount}</span>
                    </p>
                    <hr />
                    <h5 style={{ 'textAlign': 'center', 'margin': '0.2rem 0' }}>최종 수정 시간 : {value.modifiedDate}</h5>
                    <p style={{ 'textAlign': 'right', 'fontSize': '0.8rem', 'margin': '0.2rem 0' }}>댓글 ▼</p>
                    <CommentStyle>
                        <textarea />
                        <Button style={{ marginTop: '0.2rem' }} fullWidth>이슈 등록</Button>
                        {value.comment && value.comment.map((value: any, index: any) => {
                            return <>
                                <ReplyStyle key={index}>
                                    <p>
                                        {value.content}
                                    </p>
                                    <p className="flex-between">
                                        <span>{value.developer.name}</span><span>{value.modifiedDate.substring(0, 10).replace(/-/gi, '.')}</span>
                                    </p>
                                </ReplyStyle>
                            </>
                        })}
                    </CommentStyle>
                </SolutionStyle>
            </>
        })}
        <br />
    </DetailStyle>
}
export default Detail;