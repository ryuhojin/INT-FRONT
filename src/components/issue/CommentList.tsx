import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Comment from './Comment'
const CommentStyle = styled.div`
  margin-top: 0.5rem;
  textarea {
    width: -webkit-fill-available;
  }
`;


const CommentList = ({ user, value, addComment, updComment, delComment, delSolution, openDialog }: any) => {
    const [comment, setComment] = useState("");
    const [isFold, setFold] = useState(false);
    return <React.Fragment>
        <p
            style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.8rem",
                margin: "0.2rem 0",
            }}
        >
            <span>
                {user && user.userId === value.developer.userId ? (
                    <>
                        <span onClick={() => openDialog(value.id, value.content)} style={{ cursor: "pointer" }}>수정</span>
                        &nbsp;
                        <span
                            style={{ cursor: "pointer", color: "oragne" }}
                            onClick={() => {
                                delSolution(value.id);
                            }}
                        >
                            삭제
                        </span>
                    </>
                ) : (
                    <></>
                )}
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => { setFold(!isFold) }}>댓글 {value.comment.length} {isFold ? "▲" : "▼"}</span>
        </p>
        {isFold ? <>
            <CommentStyle>
                {user ? <>
                    <textarea value={comment} onChange={(e: any) => { setComment(e.target.value) }} />
                    <Button style={{ marginTop: "0.2rem" }} fullWidth onClick={() => { addComment(value.id, comment); setComment("") }}>
                        이슈 등록
                    </Button>
                </> : <></>}
                {value.comment &&
                    value.comment.map((value: any, index: any) => {
                        return <React.Fragment key={index}>
                            <Comment user={user} value={value} updComment={updComment} delComment={delComment} />
                        </React.Fragment>

                    })}
            </CommentStyle>
        </> : <></>}

    </React.Fragment>
}
export default CommentList;