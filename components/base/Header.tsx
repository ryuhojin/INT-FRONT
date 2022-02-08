const Header = ({ userMenu, onHome, tabState, onGetUserInfo, onSignout }: any) => {
    return <>
        <div className={(tabState == false ? "border-b " : "") + "flex flex-row w-full h-20"}>
            <div className="container px-4 mx-auto w-full h-full flex justify-between items-center">
                <div className="font-bold cursor-pointer text-xl text-cusblue-base hover:text-cusblue-dark" onClick={onHome}>
                    IS NOT WORKING
                </div>
                {userMenu}
            </div>
        </div>
        <div className={(tabState == false ? "hidden " : "flex flex-col ") + "w-full items-center justify-center mt-20 absolute z-20 bg-gray-50 border-b transition-all"}>
            <div className="flex w-full h-10 justify-center items-center cursor-pointer hover:bg-gray-200 hover:text-cusblue-base" onClick={onGetUserInfo}>
                내정보
            </div>
            <div className="flex w-full h-10 justify-center items-center cursor-pointer hover:bg-gray-200 hover:text-cusblue-base" onClick={onSignout}>
                로그아웃
            </div>
        </div>
    </>
}
export default Header;