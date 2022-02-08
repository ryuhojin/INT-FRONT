const BaseLayout = ({ header, body }: { header: Element | any, body?: Element | any }) => {
    return <>
        <div className="flex flex-col w-full h-screen bg-gray-50">
            {header}
            <div className="conatiner w-full h-full px-4 mx-auto">
                {body}
            </div>
        </div>
    </>
}
export default BaseLayout