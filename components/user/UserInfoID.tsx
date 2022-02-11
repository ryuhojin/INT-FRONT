const UserInfoID = ({
    paramsUser,
}: any) => {
    return (
        <>
            <div className="w-full md:w-1/2 mt-10 mx-auto flex flex-col">
                <h1 className="text-3xl font-bold">
                    <span className="text-cusblue-base">{paramsUser.name}님의 정보입니다</span>
                </h1>
                <div className="h-28 text-xl mt-4 overflow-hidden border-b">
                    {paramsUser.introduction == "" ? (
                        <span className="text-gray-300">미 입력</span>
                    ) : (
                        paramsUser.introduction
                    )}
                </div>
                <h1 className="text-xl font-bold text-cusblue-base mt-6">링크</h1>
                <div className="border-b pl-4">
                    <table className="my-4 w-full">
                        <tbody>
                            <tr className="w-full">
                                <td className="w-1/5 font-bold">G&nbsp; I&nbsp; T</td>
                                <td className="w-4/5 pl-2 overflow-hidden">
                                    {paramsUser.gitUrl == "" ? (
                                        <span className="text-gray-300">미 입력</span>
                                    ) : (
                                        paramsUser.gitUrl
                                    )}
                                </td>
                            </tr>
                            <tr className="w-full overflow-hidden">
                                <td className="w-1/5 font-bold">W E B</td>
                                <td className="w-4/5 pl-2 overflow-hidden">
                                    {paramsUser.webSiteUrl == "" ? (
                                        <span className="text-gray-300">미 입력</span>
                                    ) : (
                                        paramsUser.webSiteUrl
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="text-xl font-bold text-cusblue-base mt-6">지표</h1>
                <div className="border-b pl-4">
                    <table className="my-4 w-full">
                        <tbody>
                            <tr className="w-full">
                                <td className="w-1/5 font-bold">호감도</td>
                                <td className="w-4/5 pl-2">
                                    <div className="w-full bg-gray-200 h-full">
                                        <div
                                            className={
                                                (paramsUser.popularity > 5 ? "text-white " : " ") +
                                                "bg-cusblue-light h-full pl-1"
                                            }
                                            style={{ width: `${paramsUser.popularity}%` }}
                                        >
                                            &nbsp;{paramsUser.popularity}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="w-full">
                                <td className="w-1/5 font-bold">포인트</td>
                                <td className="w-4/5 pl-2">
                                    <div className="w-full bg-gray-200 h-full">
                                        <div
                                            className={
                                                (paramsUser.point > 5 ? "text-white " : " ") +
                                                "bg-cusblue-light h-full pl-1"
                                            }
                                            style={{ width: `${paramsUser.point}%` }}
                                        >
                                            &nbsp;{paramsUser.point}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="text-xl font-bold text-cusblue-base mt-6">개인정보</h1>
                <div className="border-b pl-4">
                    <table className="my-4 w-full">
                        <tbody>
                            <tr className="w-full">
                                <td className="w-1/5 font-bold">이메일</td>
                                <td className="w-4/5 pl-2 overflow-hidden">
                                    {paramsUser.email == "" ? (
                                        <span className="text-gray-300">미 입력</span>
                                    ) : (
                                        paramsUser.email
                                    )}
                                </td>
                            </tr>
                            <tr className="w-full">
                                <td className="w-1/5 font-bold">소　속</td>
                                <td className="w-4/5 pl-2 overflow-hidden">
                                    {paramsUser.groupName == "" ? (
                                        <span className="text-gray-300">미 입력</span>
                                    ) : (
                                        paramsUser.groupName
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default UserInfoID;
