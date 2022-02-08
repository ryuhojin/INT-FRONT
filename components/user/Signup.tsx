const Signup = ({
  userId,
  setUserId,
  password,
  setPassword,
  passwordChk,
  setPasswordChk,
  name,
  setName,
  email,
  setEmail,
  gitUrl,
  setGitUrl,
  webSiteUrl,
  setWebSiteUrl,
  introduction,
  setIntroduction,
  group,
  setGroup,
  isId,
  idChk,
  isName,
  nameChk,
  onSingup
}: any) => {
  return (
    <>
      <div className="w-full md:w-1/2 mt-10 mx-auto flex flex-col">
        <h1 className="text-3xl font-bold text-cusblue-base">회원가입</h1>
        <span className="self-end text-sm">＊는 필수 입력 입니다</span>
        <span className="mt-8 font-bold text-xl text-custeal-base flex justify-between">
          <span>아이디＊</span>
          <span
            onClick={!isId ? idChk : null}
            className={
              (isId
                ? "bg-gray-200 "
                : "cursor-pointer bg-custeal-base hover:bg-custeal-light ") +
              "text-white rounded-md font-normal px-2 py-1 text-sm"
            }
          >
            아이디 중복확인
          </span>
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="아이디를 입력해주세요..."
          type="text"
          value={userId}
          onChange={setUserId}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">
          비밀번호＊
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="비밀번호를 입력해주세요..."
          type="password"
          value={password}
          onChange={setPassword}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">
          비밀번호 확인＊
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="비밀번호를 한번 더 입력해주세요..."
          type="password"
          value={passwordChk}
          onChange={setPasswordChk}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base flex justify-between">
          <span>닉네임＊</span>
          <span
            onClick={nameChk}
            className={
              (isName
                ? "bg-gray-200 "
                : "cursor-pointer bg-custeal-base hover:bg-custeal-light ") +
              "text-white rounded-md font-normal px-2 py-1 text-sm"
            }
          >
            닉네임 중복확인
          </span>
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="닉네임을 입력해주세요..."
          type="text"
          value={name}
          onChange={setName}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">
          이메일＊
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="이메일 입력해주세요..."
          type="email"
          value={email}
          onChange={setEmail}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">
          GITHUB 주소
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="GITHUB 주소를 입력해주세요..."
          type="text"
          value={gitUrl}
          onChange={setGitUrl}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">
          개인 WEB 주소
        </span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="개인 페이지 주소 입력해주세요..."
          type="text"
          value={webSiteUrl}
          onChange={setWebSiteUrl}
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">소속</span>
        <input
          className="mt-2 h-10 border pl-3 outline-cusblue-base"
          placeholder="미구현"
          type="text"
        />
        <span className="mt-4 font-bold text-xl text-custeal-base">소속</span>
        <textarea
          className="mt-2 h-20 border p-2 outline-cusblue-base"
          placeholder="자기소개 한마디"
          value={introduction}
          onChange={setIntroduction}
        />
        <button onClick={onSingup} className="h-10 bg-cusblue-base hover:bg-cusblue-light text-white my-8 rounded">
          회원가입
        </button>
      </div>
    </>
  );
};
export default Signup;
