import QuillEditor from "../editor/QuillEditor";
import "highlight.js/styles/github-dark.css";
import "react-quill/dist/quill.snow.css";
const IssueUpdate = ({ title, setTitle, content, setContent, tag, setChagneTag, setDeleteTag, updIssue }: any) => {
    return <>
        <div className="w-full flex flex-col items-center mt-4">
            <div className=" md:w-1/2 w-full">
                <h2 className="text-xl font-bold">제목</h2>
                <input value={title} onChange={(e: any) => { setTitle(e.target.value) }} type="text" className="w-full mt-2 h-14 pl-2 border rounded text-2xl bg-white" placeholder="제목을 입력해주세요..." />
                <h2 className="text-xl font-bold mt-2">태그</h2>
                <input onKeyDown={setChagneTag} type="text" className="w-full mt-2 h-8 pl-2 border rounded bg-white" placeholder="태그를 입력후 Enter를 누르면 태그가 추가 됩니다." />
                <div className="mt-2">
                    {tag.map((v: any, index: number) => {
                        return <button onClick={() => setDeleteTag(index)} key={index} className="mr-1 text-xs border px-2 py-1 rounded-md text-white bg-cusblue-dark cursor-pointer hover:bg-cusblue-light">{`#${v}`}</button>
                    })}
                </div>
                <h2 className="text-xl font-bold my-2">내용</h2>
                <QuillEditor value={content} onChange={(value: any) => { setContent(value); }} height={"400px"} />
                <button className="bg-gray-200 border px-2 py-1 rounded-md mt-4 w-full">임시저장</button>
                <button className="mb-8 bg-cusblue-base border hover:bg-cusblue-light px-2 py-1 text-white rounded-md mt-4 w-full" onClick={updIssue}>글수정</button>
            </div>
        </div>
    </>
}
export default IssueUpdate;