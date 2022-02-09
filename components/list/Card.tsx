const Card = ({ data, onDetail }: any) => {
  const solution = "border-l-orange-300 "
  const solved = "border-l-cusblue-base "
  const stateBorder = data.adoptYn ? solved : data.solutionCount !== 0 ? solution : "";

  return (
    <>
      <div onClick={onDetail} className={stateBorder + "flex flex-col w-full md:w-1/2 mb-2 px-6 py-4 bg-white hover:border-cusbronze-dark border border-l-4 rounded-xl cursor-pointer"}>
        <span className="text-md font-bold line-clamp-1">{data.title} </span>
        <span className="text-sm line-clamp-1 mt-2">{data.content}</span>
        <hr className="mt-2" />
        {data.hashtags.length ?
          <div className="flex flex-start overflow-hidden mt-1">
            {data.hashtags.map((v: any, index: number) => {
              return <span key={index} className="mr-1 font-bold text-gray-500 text-xs border px-1 rounded-md bg-gray-100">{`#${v}`}</span>
            })}
          </div>
          : ""}
        <span className="flex justify-between mt-1 text-xs text-cusbronze-dark"><span>{data.developer.name}</span><span>{data.solutionCount} 개의 솔루션</span></span>
        <span className="text-xs text-gray-400 flex justify-between"><span>최종 수정일 : {`${data.modifiedDate.substring(
          0,
          4
        )}년 ${data.modifiedDate.substring(
          5,
          7
        )}월 ${data.modifiedDate.substring(8, 10)}일`}</span><span>{data.hits} 명이 읽은 이슈</span></span>
      </div>
    </>
  );
};
export default Card;
