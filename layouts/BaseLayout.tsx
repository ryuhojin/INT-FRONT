const BaseLayout = ({ header, body }: { header: Element | any, body?: Element | any }) => {
    return <>
        <div className="w-full h-full bg-gray-50">
            <div className="flex flex-col mx-auto w-10/12 md:w-4/5 h-full">
                {header}
                {body}
            </div>
        </div>
    </>
}
export default BaseLayout