const UserMenu = ({ onGetIssueList, onSetIssue, onSignin, toggleTab, user }: any) => {
    return <>
        <div className="flex items-center">
            <button className="mr-2 md:mr-5 hover:text-cusblue-dark" onClick={onGetIssueList}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </button>
            {user.email ?
                <>
                    <button className="mr-2 md:mr-5 bg-cusblue-base hover:bg-cusblue-dark rounded-full px-3 py-2 text-white" onClick={onSetIssue}>이슈 등록</button>
                    <button className="hover:text-cusblue-dark" onClick={toggleTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                </> :
                <><button className="bg-cusblue-base hover:bg-cusblue-dark text-white rounded-full px-4 py-2" onClick={onSignin}>로그인</button></>}
        </div>

    </>
}
export default UserMenu;