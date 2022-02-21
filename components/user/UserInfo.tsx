import { useRecoilValue } from "recoil";
import { authAtom } from "store/atom";

const UserInfo = ({
  paramsUser,
  toggleState,
  inputState,
  deleteAccount,
  updateAccount,
  onChangeUserData,
}: any) => {
  const user: any = useRecoilValue(authAtom);
  const isSameUser = user.userId == paramsUser.userId;

  const name = inputState ? (<input
    className="w-full pl-2 outline-cusblue-base"
    onChange={onChangeUserData}
    name="name"
    type="text"
    value={paramsUser.name}
    placeholder="이름을 입력해주세요"
  />) : <>{paramsUser.name}{" "}
    <span className="text-cusblue-base">님의 정보입니다</span></>;

  const introduction = inputState ? (
    <textarea
      className="h-28 text-xl mt-4 overflow-hidden border-b outline-cusblue-base"
      onChange={onChangeUserData}
      name="introduction"
      value={paramsUser.introduction}
    />
  ) : (
    <div className="h-28 text-xl mt-4 overflow-hidden border-b">
      {paramsUser.introduction == "" ? (
        <span className="text-gray-300">미 입력</span>
      ) : (
        paramsUser.introduction
      )}
    </div>
  );

  const github = inputState ? (
    <td>
      <input
        className="w-full pl-2 outline-cusblue-base"
        onChange={onChangeUserData}
        name="gitUrl"
        type="text"
        value={paramsUser.gitUrl}
        placeholder="git 주소를 입력해주세요"
      />
    </td>
  ) : (
    <td className="w-4/5 pl-2 overflow-hidden">
      {paramsUser.gitUrl == "" ? (
        <span className="text-gray-300">미 입력</span>
      ) : (
        paramsUser.gitUrl
      )}
    </td>
  );

  const website = inputState ? (
    <td>
      <input
        className="w-full pl-2 outline-cusblue-base"
        onChange={onChangeUserData}
        name="webSiteUrl"
        type="text"
        value={paramsUser.webSiteUrl}
        placeholder="블로그 주소를 입력해주세요"
      />
    </td>
  ) : (
    <td className="w-4/5 pl-2 overflow-hidden">
      {paramsUser.webSiteUrl == "" ? (
        <span className="text-gray-300">미 입력</span>
      ) : (
        paramsUser.webSiteUrl
      )}
    </td>
  );

  const email = inputState ? (
    <td>
      <input
        className="w-full pl-2 outline-cusblue-base"
        onChange={onChangeUserData}
        name="email"
        type="email"
        value={paramsUser.email}
        placeholder="Email 주소를 입력해주세요"
      />
    </td>
  ) : (
    <td className="w-4/5 pl-2 overflow-hidden">
      {paramsUser.email == "" ? (
        <span className="text-gray-300">미 입력</span>
      ) : (
        paramsUser.email
      )}
    </td>
  );

  const group = inputState ? (
    <td>
      <input
        className="w-full pl-2 outline-cusblue-base"
        onChange={onChangeUserData}
        name="groupName"
        type="text"
        value={paramsUser.groupName}
        placeholder="소속을 입력해주세요"
      />
    </td>
  ) : (
    <td className="w-4/5 pl-2 overflow-hidden">
      {paramsUser.groupName == "" ? (
        <span className="text-gray-300">미 입력</span>
      ) : (
        paramsUser.groupName
      )}
    </td>
  );

  const footer = isSameUser ? (
    <div className="w-full flex justify-end mt-6 mb-10">
      {inputState ? (
        <button
          onClick={updateAccount}
          className="mr-4 bg-custeal-base hover:bg-custeal-light px-3 py-2 rounded-full text-white"
        >
          수정 완료
        </button>
      ) : (
        <button
          onClick={toggleState}
          className="mr-4 bg-cusblue-base hover:bg-cusblue-light px-3 py-2 rounded-full text-white"
        >
          정보 수정
        </button>
      )}
      <button onClick={deleteAccount} className="text-red-600">
        회원 탈퇴
      </button>
    </div>
  ) : (
    <></>
  );

  return (
    <>
      <div className="w-full md:w-1/2 mt-10 mx-auto flex flex-col">
        <h1 className="text-3xl font-bold">
          {name}
        </h1>
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
    </>
  );
};
export default UserInfo;
