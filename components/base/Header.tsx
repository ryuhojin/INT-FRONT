const Header = ({ userMenu, onHome }: any) => {
    return <>
        <div className="flex flex-row w-full h-14 justify-between items-center mx-auto ">
            <div className="font-bold cursor-pointer md:text-xl hover:text-cgred-base" onClick={onHome}>
                IS NOT WORKING
            </div>
            <div>
                {userMenu}
            </div>
        </div>
    </>
}
export default Header;