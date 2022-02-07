import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";

const UserInfo = ({ paramsUser, toggleState, inputState, deleteAccount }: any) => {
    const { user } = useSelector((state: RootState) => state.user.user)
    return <>
        <div className="flex flex-col w-full h-full justify-center items-center">
            <h2 className="text-2xl font-bold"> 나의 정보 </h2>
            <div className="flex w-full md:w-1/2 xl:w-5/12 border mt-5">
                <div className="w-1/3 text-center">Image URL</div>
                <div className="w-2/3">
                    <table className="w-full">
                        <colgroup>
                            <col width="30%" />
                            <col width="70%" />
                        </colgroup>
                        <tr className="h-10">
                            <td className="border text-center">아이디</td>
                            <td className="border pl-2">{paramsUser.userId}</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border text-center">이름</td>
                            {inputState === true ? <><td className="border"><input type="text" placeholder="이름을 입력해주세요" className="h-full w-full pl-2" /></td></> : <><td className="border pl-2">{paramsUser.name}</td></>}
                        </tr>
                        <tr className="h-10">
                            <td className="border text-center">이메일</td>
                            {inputState === true ? <><td className="border"><input type="email" placeholder="이메일을 입력해주세요" className="h-full w-full pl-2" /></td></> : <><td className="border pl-2">{paramsUser.email}</td></>}
                        </tr>
                        <tr className="h-10">
                            <td className="border text-center">점수</td>
                            <td className="border pl-2">{paramsUser.point}</td>
                        </tr>
                        <tr className="h-10">
                            <td className="border text-center">인기도</td>
                            <td className="border pl-2">{paramsUser.popularity}</td>
                        </tr>
                    </table>
                </div>
            </div>
            {inputState === true ? <>
                <textarea className="w-full h-32 md:w-1/2 xl:w-5/12 border mt-5 p-2" placeholder="자기소개를 입력하세요" /></> :
                <>
                    <div className="flex flex-col w-full h-32 md:w-1/2 xl:w-5/12 border mt-5 p-2">
                        {paramsUser.introduction}
                    </div>
                </>}
            <div className="w-full md:w-1/2 xl:w-5/12 mt-5">
                <table className="w-full">
                    <colgroup>
                        <col width="30%" />
                        <col width="70%" />
                    </colgroup>
                    <tr className="h-10">
                        <td className="border text-center">GITHUB 주소</td>
                        {inputState === true ? <><td className="border"><input type="text" placeholder="GITHUB 주소를 입력해주세요" className="h-full w-full pl-2" /></td></> : <><td className="border text-center">{paramsUser.gitUrl}</td></>}
                    </tr>
                    <tr className="h-10">
                        <td className="border text-center">WEBSITE 주소</td>
                        {inputState === true ? <><td className="border"><input type="text" placeholder="WEBSITE 주소를 입력해주세요" className="h-full w-full pl-2" /></td></> : <><td className="border text-center">{paramsUser.webSiteUrl}</td></>}
                    </tr>
                </table>
            </div>
            {user.userId === paramsUser.userId ?
                <>
                    {inputState === true ?
                        <>
                            <div className="w-full md:w-1/2 xl:w-5/12 flex justify-end mt-2">
                                <button className="bg-seaweed-base hover:bg-seaweed-dark w-full text-white rounded-md h-10 mt-2">
                                    변경 완료
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <div className="w-full md:w-1/2 xl:w-5/12 flex justify-end mt-2">
                                <button className="bg-maxyellow-base hover:bg-maxyellow-dark w-full rounded-md h-10 mt-2" onClick={toggleState}>
                                    수정
                                </button>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-5/12 flex justify-end mt-1">
                                <button className="bg-cgred-base hover:bg-cgred-dark w-full text-white rounded-md h-10 mt-2" onClick={deleteAccount}>
                                    탈퇴
                                </button>
                            </div>
                        </>
                    }
                </> : <></>}

        </div>
    </>
}
export default UserInfo;