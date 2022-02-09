const Solution = () => {
    return <div className="border my-2 rounded-xl p-3 bg-white">
        <span>솔루션 내용입니다</span>
        <hr className="mt-2" />
        <button className="w-full text-center text-white mt-2 bg-red-400 hover:bg-red-300 py-1 rounded-md">체택</button>
        <div className="w-full flex justify-center text-xs mt-2 text-cussand-dark">
            최종 수정일 : 2022년 12월 12일
        </div>
        <div className="w-full flex justify-between text-xs mt-1 text-gray-500">
            <span>류호진</span><span className="cursor-pointer hover:text-gray-400">12개의 코멘트 ▼</span>
        </div>
    </div>
}
export default Solution;