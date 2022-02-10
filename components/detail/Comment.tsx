import { useState } from "react";

const Comment = ({ data, user, delComment, updComment }: any) => {
    const [editState, setEditState] = useState(false);
    const [content, setContent] = useState(data.content);
    const isCommentUser = data.developer.userId == user.userId;
    const update = () => {
        updComment(data.id, content);
        setEditState(!editState);
    }
    const footer = isCommentUser ?
        <>
            <div className='flex justify-between mt-1'><span className='text-gray-400'>{data.developer.name}님 {data.modifiedDate.substring(0, 10)}</span><span><span className='text-cusblue-base cursor-pointer' onClick={() => { editState ? update() : setEditState(!editState) }}>{editState ? '수정완료' : '수정'}</span>&nbsp;&nbsp;<span className='text-red-500 cursor-pointer' onClick={() => { delComment(data.id) }}>삭제</span></span></div>
        </> :
        <>
            <div className='flex justify-end mt-1 text-gray-400'><span>{data.developer.name}님&nbsp;</span><span> {data.modifiedDate.substring(0, 10)}</span></div>
        </>

    return <>
        <div className='text-xs'>
            <div className='mt-1'>
                {
                    !editState ?
                        <p>{data.content}</p>
                        :
                        <textarea className="w-full" value={content} onChange={(e: any) => {
                            setContent(e.target.value)
                        }}></textarea>
                }
                {footer}
            </div>
        </div>
    </>
}
export default Comment;