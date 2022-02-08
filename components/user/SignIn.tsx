const SignIn = ({
  username,
  password,
  onSubmit,
  setUsername,
  setPassword,
  onSignup,
}: {
  username: string;
  password: string;
  onSubmit: any;
  setUsername: any;
  setPassword: any;
  onSignup: any;
}) => {
  return (
    <>
      <form
        className="flex w-full h-full justify-center items-center"
        onSubmit={onSubmit}
      >
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h2 className="text-2xl m-2">로그인</h2>
          <input
            value={username}
            onChange={setUsername}
            type="text"
            placeholder="아이디를 입력해주세요"
            className="w-full h-16 m-2 pl-3 border rounded-md outline-cusblue-base"
          />
          <input
            value={password}
            onChange={setPassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-full h-16 m-2 pl-3 border rounded-md outline-cusblue-base"
          />
          <span className="self-end my-2">
            <span className="hover:text-cusblue-base cursor-pointer" onClick={onSignup}>
              회원가입
            </span>{" "}
            /{" "}
            <span className="hover:text-cusblue-base cursor-pointer">
              비밀번호 찾기
            </span>
          </span>
          <button className="bg-cusblue-base hover:bg-cusblue-dark w-full text-white rounded-md h-10 m-3">
            로 그 인
          </button>
        </div>
      </form>
    </>
  );
};
export default SignIn;
