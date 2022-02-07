import user from "../../store/modules/user";

const UserBaseMenu = ({ onGetIssueList, onSetIssue, onSignin, onSignout, onGetUserInfo, user }: any) => {
    return <>
        <div className="flex items-center hidden md:block">
            <button className="mr-3 hover:text-cgred-dark" onClick={onGetIssueList}>이슈목록</button>
            {user.email ? <>
                <button className="mr-3 hover:text-cgred-dark" onClick={onSetIssue}>이슈등록</button>
                <button className="mr-3 hover:text-cgred-dark" onClick={onGetUserInfo}>내정보</button>
                <button className="hover:text-cgred-dark" onClick={onSignout}>로그아웃</button></> :
                <><button className="hover:text-cgred-dark" onClick={onSignin}>로그인</button></>}

        </div>
        <div className="flex items-center md:hidden">
            <button className="mr-3 hover:text-cgred-base" onClick={onGetIssueList}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </button>
            {user.email ?
                <>
                    <button className="mr-3 hover:text-cgred-base" onClick={onSetIssue}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                    <button className="mr-3 hover:text-cgred-base" onClick={onGetUserInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                    <button className="hover:text-cgred-base" onClick={onSignout}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </>
                :
                <>
                    <button className="hover:text-cgred-base" onClick={onSignin}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </button>

                </>}
        </div>
    </>
}
export default UserBaseMenu;