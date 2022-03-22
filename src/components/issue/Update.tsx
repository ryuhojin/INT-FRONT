import Router from "next/router";
import styled from "styled-components";
import Button from "../common/Button";
import TipTap from "../common/TipTap";
import IssueEditor from "../editor/IssueEditor";

const WriteStyle = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    margin:0 1rem;
    @media only screen and (min-width: 550px) {
        margin: 0 auto;
        width:35%;
    }
    .title {
        height:2rem;
        padding:0.2rem;
    }
    .tag{
        height:1.5rem;
        padding:0.2rem;
    }
`;

const DetailTagStyle = styled.div`
    margin: 0.5rem 0 0.5rem 0;
    border-radius: 10px;
    span {
        color:white;
        padding: 0.2rem 0.5rem;
        border-radius:10px;
        background:rgba(0,0,0,0.5);
        font-size:0.8rem;
        line-height: 1.8rem;
        cursor:pointer;
    }
    span + span {
        margin-left:0.3rem;
    }
`

const Update = ({ editorRef, updIssue, title, setTitle, tag, setChangeTag, setDeleteTag }: any) => {
    return <WriteStyle>
        <h2 onClick={() => Router.back()} style={{ cursor: 'pointer' }}>← 뒤로가기</h2>
        <h2>제목</h2>
        <input type="text" placeholder="제목을 입력해주세요" value={title} onChange={(e: any) => { e.preventDefault(); setTitle(e.target.value) }} className="title" />
        <h2>태그</h2>
        <input type='text' placeholder="태그를 입력후 Enter를 눌러주세요" onKeyUp={setChangeTag} className="tag" />
        <DetailTagStyle>
            {[tag] && [tag].map((value: any, index: any) => {
                return <span onClick={() => setDeleteTag(index)} key={index}># {value}</span>
            })}
        </DetailTagStyle>
        <h2 style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>내용</h2>
        <IssueEditor height="300px" editorRef={editorRef}/>
        <Button onClick={updIssue} fullWidth>이슈 수정</Button>
        <br />
    </WriteStyle>
}
export default Update;