import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import QuillEditor from "../editor/QuillEditor";
import Solution from "./Solution";
const SolutionList = ({ content, onEditorChange, solutions, isSameUser }: any) => {
    const { user } = useSelector((state: RootState) => state.user.user)

    const addSolutionBtn = Object.keys(user).length !== 0 ? <>
        <QuillEditor value={content} onChange={onEditorChange} height={"200px"} />
        <div className="mt-2 w-full flex justify-end">
            <button className="bg-cusblue-base hover:bg-cusblue-light text-white px-3 py-2 rounded-md">솔루션 등록</button>
        </div></> : <></>
    console.log(solutions)
    return <>
        <div className="w-full flex flex-col items-center mt-4">
            <div className=" md:w-1/2 w-full">
                <h1 className="text-xl font-bold text-cusblue-base mb-2">HOW TO SOLVE</h1>
                {addSolutionBtn}
                <div className="w-full">
                    <h5 className="my-3 text-lg">총 {solutions.length}개의 솔루션</h5>
                    {
                        solutions.map((v: any, index: number) => {
                            return <Solution key={index} index={index} data={v} isSameUser={isSameUser} />
                        })
                    }
                </div>
            </div>
        </div>
    </>
}
export default SolutionList;