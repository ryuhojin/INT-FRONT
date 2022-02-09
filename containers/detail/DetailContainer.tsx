import { useState } from "react";
import IssueDetail from "../../components/detail/IssueDetail";
import SolutionList from "../../components/detail/SolutionList";

const DetailContainer = ({ detail }: any) => {
    const [content, setContent] = useState("");
    const onEditorChange = (value: string) => {
        setContent(value);
    };
    return <>
        <IssueDetail detail={detail} />
        <SolutionList content={content} onEditorChange={onEditorChange} />
    </>
}
export default DetailContainer;