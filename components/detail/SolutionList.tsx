import { useRecoilValue } from "recoil";
import { authAtom } from "../../store/atom";

import QuillEditor from "../editor/QuillEditor";
import Solution from "./Solution";
const SolutionList = ({ content, onEditorChange, solutions, getSolution, getSolutionById, isSameUser, addSolution, delSolution, adtSolution, updSolution, recSolution }: any) => {
    const user: any = useRecoilValue(authAtom);
    const addSolutionBtn = user ? <>
        <QuillEditor value={content} onChange={onEditorChange} height={"200px"} />
        <div className="mt-2 w-full flex justify-end">
            <button onClick={addSolution} className="bg-cusblue-base hover:bg-cusblue-light text-white px-3 py-2 rounded-md">솔루션 등록</button>
        </div></> : <></>
    return <>
        <div className="w-full flex flex-col items-center mt-4">
            <div className=" md:w-1/2 w-full">
                <h1 className="text-xl font-bold text-cusblue-base mb-2">HOW TO SOLVE</h1>
                {addSolutionBtn}
                <div className="w-full">
                    <h5 className="my-3 text-lg">총 {solutions.length}개의 솔루션</h5>
                    {
                        solutions.map((v: any) => {
                            return <Solution key={v.id} getSolution={getSolution} getSolutionById={getSolutionById} index={v.id} data={v} isSameUser={isSameUser} updSolution={updSolution} adtSolution={adtSolution} delSolution={delSolution} recSolution={recSolution} />
                        })
                    }
                </div>
            </div>
        </div>
    </>
}
export default SolutionList;