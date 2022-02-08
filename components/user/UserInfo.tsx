import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";

const UserInfo = ({
  paramsUser,
  toggleState,
  inputState,
  deleteAccount,
  updateAccount,
  onChangeUserData,
}: any) => {
  const { user } = useSelector((state: RootState) => state.user.user);

  const isSameUser = user.userId == paramsUser.userId;

  const introduction = inputState ?
    <textarea className="h-28 text-xl mt-4 overflow-hidden border-b outline-cusblue-base" value={paramsUser.introduction} /> :
    <div className="h-28 text-xl mt-4 overflow-hidden border-b">{paramsUser.introduction}</div>

  const github = inputState ?
    <input className="w-full pl-2 outline-cusblue-base" type="text" value={paramsUser.gitUrl} placeholder="git 주소를 입력해주세요" /> :
    <td className="w-4/5 pl-2 overflow-hidden">{paramsUser.gitUrl}https://github.com/ryuhojin</td>

  const website = inputState ?
    <input className="w-full pl-2 outline-cusblue-base" type="text" value={paramsUser.webSiteUrl} placeholder="블로그 주소를 입력해주세요" /> :
    <td className="w-4/5 pl-2 overflow-hidden">{paramsUser.webSiteUrl}https://ryuhojin.tistory.com</td>

  const email = inputState ?
    <input className="w-full pl-2 outline-cusblue-base" type="email" value={paramsUser.email} placeholder="Email 주소를 입력해주세요" /> :
    <td className="w-4/5 pl-2 overflow-hidden">{paramsUser.email}</td>

  const group = inputState ?
    <input className="w-full pl-2 outline-cusblue-base" type="text" value={paramsUser.webSiteUrl} placeholder="소속을 입력해주세요" /> :
    <td className="w-4/5 pl-2 overflow-hidden">{paramsUser.webSiteUrl}https://ryuhojin.tistory.com</td>

  const footer = isSameUser ?
    <div className="w-full flex justify-end mt-6">
      {inputState ?
        <button onClick={toggleState} className="mr-4 bg-custeal-base hover:bg-custeal-light px-3 py-2 rounded-full text-white">수정 완료</button> :
        <button onClick={toggleState} className="mr-4 bg-cusblue-base hover:bg-cusblue-light px-3 py-2 rounded-full text-white">정보 수정</button>}
      <button onClick={deleteAccount} className="text-red-600">회원 탈퇴</button>
    </div> : <></>

  return (
    <>
      <div className="w-full md:w-1/2 mt-10 mx-auto flex flex-col">
        <h1 className="text-3xl font-bold">{paramsUser.name} <span className="text-cusblue-base">님의 정보입니다</span></h1>
        {introduction}
        <h1 className="text-xl font-bold text-cusblue-base mt-6">링크</h1>
        <div className="border-b pl-4">
          <table className="my-4 w-full">
            <tbody>
              <tr className="w-full">
                <td className="w-1/5 font-bold">G&nbsp; I&nbsp; T</td>
                {github}
              </tr>
              <tr className="w-full overflow-hidden">
                <td className="w-1/5 font-bold">W E B</td>
                {website}
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
                    <div className={(paramsUser.popularity > 5 ? "text-white " : " ") + "bg-cusblue-light h-full pl-1"} style={{ width: `${paramsUser.popularity}%` }}>&nbsp;{paramsUser.popularity}</div>
                  </div>
                </td>
              </tr>
              <tr className="w-full">
                <td className="w-1/5 font-bold">포인트</td>
                <td className="w-4/5 pl-2">
                  <div className="w-full bg-gray-200 h-full">
                    <div className={(paramsUser.point > 5 ? "text-white " : " ") + "bg-cusblue-light h-full pl-1"} style={{ width: `${paramsUser.point}%` }}>&nbsp;{paramsUser.point}</div>
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
                {email}
              </tr>
              <tr className="w-full">
                <td className="w-1/5 font-bold">소　속</td>
                {group}
              </tr>
            </tbody>
          </table>
        </div>
        {footer}
      </div>


      {/* <div className="flex flex-col w-full h-full justify-center items-center">
        <h2 className="text-2xl font-bold"> 나의 정보 </h2>
        <div className="flex w-full md:w-1/2 xl:w-5/12 border mt-5">
          <div className="w-1/3 text-center">Image URL</div>
          <div className="w-2/3">
            <table className="w-full">
              <colgroup>
                <col width="40%" />
                <col width="60%" />
              </colgroup>
              <tr className="h-10">
                <td className="border text-center">아이디</td>
                <td className="border pl-2">{paramsUser.userId}</td>
              </tr>
              <tr className="h-10">
                <td className="border text-center">이름</td>
                {inputState === true ? (
                  <>
                    <td className="border">
                      <input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        className="h-full w-full pl-2"
                        value={paramsUser.name}
                        name="name"
                        onChange={onChangeUserData}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border pl-2">{paramsUser.name}</td>
                  </>
                )}
              </tr>
              <tr className="h-10">
                <td className="border text-center">이메일</td>
                {inputState === true ? (
                  <>
                    <td className="border">
                      <input
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        className="h-full w-full pl-2"
                        value={paramsUser.email}
                        name="email"
                        onChange={onChangeUserData}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border pl-2">{paramsUser.email}</td>
                  </>
                )}
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
        {inputState === true ? (
          <>
            <textarea
              className="w-full h-32 md:w-1/2 xl:w-5/12 border mt-5 p-2"
              placeholder="자기소개를 입력하세요"
              value={paramsUser.introduction}
              name="introduction"
              onChange={onChangeUserData}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col w-full h-32 md:w-1/2 xl:w-5/12 border mt-5 p-2">
              {paramsUser.introduction}
            </div>
          </>
        )}
        <div className="w-full md:w-1/2 xl:w-5/12 mt-5">
          <table className="w-full">
            <colgroup>
              <col width="40%" />
              <col width="60%" />
            </colgroup>
            <tr className="h-10">
              <td className="border text-center">GITHUB 주소</td>
              {inputState === true ? (
                <>
                  <td className="border">
                    <input
                      type="text"
                      placeholder="GITHUB 주소를 입력해주세요"
                      className="h-full w-full pl-2"
                      name="gitUrl"
                      value={paramsUser.gitUrl}
                      onChange={onChangeUserData}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td className="border text-center">{paramsUser.gitUrl}</td>
                </>
              )}
            </tr>
            <tr className="h-10">
              <td className="border text-center">WEBSITE 주소</td>
              {inputState === true ? (
                <>
                  <td className="border">
                    <input
                      type="text"
                      placeholder="WEBSITE 주소를 입력해주세요"
                      className="h-full w-full pl-2"
                      name="webSiteUrl"
                      value={paramsUser.webSiteUrl}
                      onChange={onChangeUserData}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td className="border text-center">
                    {paramsUser.webSiteUrl}
                  </td>
                </>
              )}
            </tr>
          </table>
        </div>
        {user.userId === paramsUser.userId ? (
          <>
            {inputState === true ? (
              <>
                <div className="w-full md:w-1/2 xl:w-5/12 flex justify-end mt-2">
                  <button
                    onClick={updateAccount}
                    className="bg-seaweed-base hover:bg-seaweed-dark w-full text-white rounded-md h-10 mt-2"
                  >
                    변경 완료
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 xl:w-5/12 flex justify-end mt-2">
                  <button
                    className="bg-maxyellow-base hover:bg-maxyellow-dark w-full rounded-md h-10 mt-2"
                    onClick={toggleState}
                  >
                    수정
                  </button>
                </div>
                <div className="w-full md:w-1/2 xl:w-5/12 flex justify-end mt-1">
                  <button
                    className="bg-cgred-base hover:bg-cgred-dark w-full text-white rounded-md h-10 mt-2"
                    onClick={deleteAccount}
                  >
                    탈퇴
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div> */}
    </>
  );
};
export default UserInfo;
