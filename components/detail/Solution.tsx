const Solution = ({ isSameUser, data }: any) => {
    const convert12H = (value: string | String) => {
        var time = value;
        var getTime = time.substring(0, 2);
        var intTime = parseInt(getTime);
        if (intTime < 12) {
            var str = "오전 ";
        } else {
            var str = "오후 ";
        }
        if (intTime == 12) {
            var cvHour = intTime;
        } else {
            var cvHour = intTime % 12;
        }
        var res = str + ("0" + cvHour).slice(-2) + time.slice(-3);
        return res;
    };
    const setSolBtn = isSameUser ? <button className="w-full text-center text-white mt-2 bg-red-400 hover:bg-red-300 py-1 rounded-md">체택</button> : <></>
    return <div className="border my-2 rounded-xl p-3 bg-white">
        <div className="ql-container ql-snow ql-container-none">
            <div
                className="ql-editor  ql-editor-none"
                style={{ paddingTop: "0 !important", paddingBottom: "0 !important" }}
                dangerouslySetInnerHTML={{
                    __html: String(data.content),
                }}
            ></div>
        </div>
        <hr className="mt-2" />
        {setSolBtn}
        <div className="w-full flex justify-center text-xs mt-2 text-cussand-dark">
            최종 수정일 : {`${data?.modifiedDate?.substring(0, 10)} ${convert12H(
                data?.modifiedDate?.substring(11, 16)
            )}`}
        </div>
        <div className="w-full flex justify-between text-xs mt-1 text-gray-500">
            <span>{data.developer.name}</span><span className="cursor-pointer hover:text-gray-400">{data.comment.length}개의 코멘트 ▼</span>
        </div>
    </div>
}
export default Solution;