const SearchBox = () => {
  return (
    <div className="flex w-full justify-center mt-8">
      <div className="flex items-center md:w-1/2 w-full h-14 rounded-full border-2 px-10  bg-white hover:border-cusblue-base text-cusblue-base">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="gray"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          type="text"
          className="ml-3 h-full w-full focus:outline-none"
          placeholder="검색어를 입력 후 Enter를 눌러주세요.."
        />
      </div>
    </div>
  );
};
export default SearchBox;
