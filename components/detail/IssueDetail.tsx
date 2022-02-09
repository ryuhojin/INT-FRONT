import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";

const IssueDetail = ({ detail }: any) => {
    const { user } = useSelector((state: RootState) => state.user.user);
    const isSameUser = user.userId == detail.developer.userId;
    const button = isSameUser ? <>
        <div className="w-full flex justify-end mt-2">
            <button className="mr-2 bg-custeal-base hover:bg-custeal-light px-3 py-1 rounded-md text-white">수정</button>
            <button className="text-red-600">삭제</button>
        </div></> :
        <div className="w-full flex justify-end mt-2">
            <button className="mr-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </button>
            <button className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                </svg>
            </button>
        </div>;
        
    return <div className="w-full flex flex-col items-center mt-8">
        <div className=" md:w-1/2 w-full">
            <h1 className="text-5xl">{detail.title}</h1>
            <h4 className="mt-4 text-gray-500">
                {detail.developer.name}
            </h4>
            <h5 className="text-gray-500 text-sm">
                {`${detail.modifiedDate.substring(0, 4)}년 ${detail.modifiedDate.substring(
                    5,
                    7
                )}월 ${detail.modifiedDate.substring(8, 10)}일`}
            </h5>
            <hr className="mt-4" />
            <hr className="mt-40" />
            <h1 className="text-2xl mt-4 cursor-pointer">{detail.developer.name}</h1>
            <h4 className="mt-1">
                {detail.developer.introduction}
            </h4>
            {button}
            <hr className="mt-4" />

        </div>
    </div>
}
export default IssueDetail;