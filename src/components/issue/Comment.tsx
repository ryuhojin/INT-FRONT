import { useEffect, useState } from "react";
import styled from "styled-components";
const ReplyStyle = styled.div`
  p {
    font-size: 0.7rem;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
  }
`;
const Comment = ({ user, value, delComment, updComment }: any) => {
  const [commentState, setCommentState] = useState(false);
  const [edit, setEdit] = useState(value.content);

  return <ReplyStyle>
    {commentState ? <textarea value={edit} onChange={(e: any) => setEdit(e.target.value)}></textarea> : <p>{value.content}</p>}
    <p className="flex-between">
      <span>{value.developer.name}</span>
      <span>
        {
          user && user.userId == value.developer.userId ? <>
            {commentState ? <>
              <span style={{ cursor: 'pointer' }} onClick={() => { setCommentState(false); updComment(value.id, edit); }}>수정완료</span>
              &nbsp;·&nbsp;
              <span style={{ cursor: 'pointer' }} onClick={() => { setCommentState(false); }}>취소</span>
            </> :
              <><span style={{ cursor: 'pointer' }} onClick={() => { setCommentState(true); }}>수정</span></>}
            &nbsp;·&nbsp;
            <span style={{ cursor: 'pointer' }} onClick={() => { setCommentState(false); delComment(value.id) }}>삭제</span>&nbsp;
          </> : <></>
        }
        {value.modifiedDate
          .substring(0, 10)
          .replace(/-/gi, ".")}
      </span>
    </p>
  </ReplyStyle>
}
export default Comment;