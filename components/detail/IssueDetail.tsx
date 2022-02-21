import Router from "next/router";

const IssueDetail = ({ detail, isSameUser, onIssueList, delIssue, updIssue, followUser }: any) => {
    const button = isSameUser ? <>
        <button className="mr-2 " onClick={() => { updIssue(detail) }}>수정</button>
        <button className="text-red-600" onClick={() => { delIssue(detail.id) }}>삭제</button></> :
        <></>;
    return <div className="w-full flex flex-col items-center mt-4">
        <div className=" md:w-1/2 w-full">
            <h1 onClick={onIssueList} className="text-lg font-bold hover:text-cusblue-dark cursor-pointer">← 뒤로 가기</h1>
            <h1 className="text-5xl mt-4">{detail.title}</h1>
            <h4 className="mt-4 text-gray-500">
                {detail.developer.name}
            </h4>
            <div className="text-gray-500 text-sm flex justify-between w-full">
                <span>
                    {`${detail.modifiedDate.substring(0, 4)}년 ${detail.modifiedDate.substring(
                        5,
                        7
                    )}월 ${detail.modifiedDate.substring(8, 10)}일`}
                </span>
                <span>
                    {button}
                </span>
            </div>
            {detail.hashtags.length ? <>
                <div className="mt-2 break-words">
                    {detail.hashtags.map((v: any, index: number) => {
                        return <span key={index} className="mr-1 text-xs border px-1 rounded-md text-white bg-cusblue-dark cursor-pointer hover:bg-cusblue-light">{`#${v}`}</span>
                    })}
                </div>
                <hr className="mt-2" /></>
                : <hr className="mt-4" />}

            <div className="ql-container ql-snow ql-container-none">
                <div
                    className="ql-editor  ql-editor-none"
                    dangerouslySetInnerHTML={{ __html: String(detail.content) }}
                ></div>
            </div>
            <hr className="mt-4" />
            <div className="mt-4 flex w-full justify-between">
                <span className="text-2xl cursor-pointer" onClick={() => { Router.push({ pathname: `/user/${detail.developer.name}` }); }}>
                    {detail.developer.name}
                </span>
                <button className={(detail.developer.followYn === true ? "border-gray-500 text-gray-500 " : "border-gray-500 " )+"flex px-2 py-1 border rounded-md "} onClick={() => { followUser(detail.developer.userId) }}>
                    {detail.developer.followYn === true ? "팔로우 중":"팔로우"}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
            <h4 className="mt-1">
                {detail.developer.introduction}
            </h4>
            <div className="w-full flex justify-end mt-2">
                <a target={"_blank"} rel="noreferrer" href={"https://" + detail.developer.gitUrl} className="mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a target={"_blank"} rel="noreferrer" href={"https://" + detail.developer.webSiteUrl}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                    </svg>
                </a>
            </div>
            <hr className="mt-4" />

        </div>
    </div >
}
export default IssueDetail;