import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CommentContainer from '../../containers/detail/CommentContainer';
import { RootState } from '../../store/modules';
import { convert12H } from '../../utils/common'
import QuillEditor from '../editor/QuillEditor';

const Solution = ({ isSameUser, data, getSolution, delSolution, adtSolution, recSolution, updSolution }: any) => {

    const { user } = useSelector((state: RootState) => state.user.user);

    const [content, setContent] = useState(String(data.content));
    const [editState, setEditState] = useState(false);
    const [commentState, setCommentState] = useState(false);
    useEffect(()=>{

    },[data])
    const isSolUser = user.userId == data.developer.userId;

    /** DYNAMIC UI START */
    const setSolBtn = isSameUser && !editState ? data.adoptYn ? <button className="w-full text-center text-white mt-2 bg-gray-400 py-1 rounded-md" >체택됨</button> : <button onClick={() => { adtSolution(data.id) }} className="w-full text-center text-white mt-2 bg-cusblue-base hover:bg-cusblue-light py-1 rounded-md" >체택</button> : <></>
    const setUpdDelBtn = isSolUser ? !editState ? <>
        <div className="w-full flex justify-center text-xs mt-2 text-cussand-dark">
            <button onClick={() => { setEditState(!editState) }}>수정</button>&nbsp;/&nbsp;<button onClick={() => { delSolution(data.id) }}>삭제</button>
        </div>
    </> : <></>
        :
        <>
            <div className="w-full flex justify-center text-xs mt-2 text-cussand-dark">
                최종 수정일 : {`${data?.modifiedDate?.substring(0, 10)} ${convert12H(
                    data?.modifiedDate?.substring(11, 16)
                )}`}
            </div>
        </>

    const adobtDiv = data.adoptYn ? "border-cusblue-base " : ""

    const contentDiv = editState ?
        <>
            <QuillEditor value={content} onChange={(value: any) => { setContent(value); }} height={"200px"} />
            <div className="w-full flex justify-center text-xs mt-2 text-cussand-dark">
                <button onClick={() => { updSolution(data.id, content); setEditState(!editState); }}>수정완료</button>&nbsp;/&nbsp;<button onClick={() => { setEditState(!editState); setContent(String(data.content)); }}>취소</button>
            </div>
        </> :
        <div className="ql-container ql-snow ql-container-none">
            <div
                className="ql-editor ql-editor-none"
                style={{ padding: '5px 0px !important' }}
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            ></div>
        </div>
    /** DYNAMIC UI END */

    return <div className={adobtDiv + "border my-2 rounded-xl p-3 bg-white"}>
        <p className='text-right text-xs text-gray-400'><span className='text-orange-400'>{data.recommendationCount} </span>개의 추천 <span className='text-cusblue-base cursor-pointer' onClick={() => { recSolution(data.id) }}>&nbsp;&nbsp;추천하기</span></p>
        {contentDiv}
        <hr className="mt-2" />
        {setSolBtn}
        {setUpdDelBtn}
        <div className="w-full flex justify-between text-xs mt-1 text-gray-500">
            <span>{data.developer.name}</span><span className="cursor-pointer hover:text-gray-400" onClick={() => { setCommentState(!commentState) }}>{data.comment.length}개의 코멘트 {commentState ? `▼` : `▲`}</span>
        </div>
        {
            commentState ?
                <>
                    <CommentContainer user={user} getSolution={getSolution} solutionId={data.id} comment={data.comment} />
                </> : <></>
        }
    </div>
}
export default Solution;