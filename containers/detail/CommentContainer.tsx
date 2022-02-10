import { useState } from "react";
import { createComment, deleteComment, selectComment, updateComment } from "../../api/modules/comment";
import Comment from "../../components/detail/Comment";
const CommentContainer = ({ user, comment, getSolution, solutionId }: any) => {
    const [content, setContent] = useState("");

    const addComment = async () => {
        const response = await createComment({
            solutionId: solutionId,
            content: content,
        })
        if (response.status === 200) {
            getSolution()
        }
    }

    const delComment = async (id: number) => {
        const response = await deleteComment(id);
        if (response.status === 200) {
            getSolution()
        }
    }

    const updComment = async (id: number, content: string) => {
        const response = await updateComment({
            id: id, content: content
        });
        if (response.status === 200) {
            getSolution()
        }
    }

    return <>
        {
            Object.keys(user).length !== 0 ? <>
                <textarea placeholder='코멘트를 입력해주세요' value={content} onChange={(e: any) => { e.preventDefault(); setContent(e.target.value) }} className='mt-2 w-full border rounded-md p-2 h-14 text-xs' />
                <div className='flex justify-end'>
                    <button className='text-xs bg-cusblue-base px-2 py-1 text-white hover:bg-cusblue-light rounded-md' onClick={() => { addComment(); setContent(""); }}>댓글 등록</button>
                </div></> : <></>
        }
        {
            comment.map((v: any) => {
                return <Comment key={v.id} data={v} user={user} updComment={updComment} delComment={delComment} />
            })
        }
    </>
}
export default CommentContainer;