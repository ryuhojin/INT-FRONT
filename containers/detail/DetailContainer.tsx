import { useState } from "react";
import { useSelector } from "react-redux";
import IssueDetail from "../../components/detail/IssueDetail";
import SolutionList from "../../components/detail/SolutionList";
import { RootState } from "../../store/modules";
import Router from "next/router";

import "highlight.js/styles/github-dark.css";
import "react-quill/dist/quill.snow.css";

const DetailContainer = ({ detail }: any) => {
    const [content, setContent] = useState("");
    const { user } = useSelector((state: RootState) => state.user.user);
    const isSameUser = user.userId == detail.developer.userId;
    const onIssueList = () => {
        Router.push('/issue')
    }
    const onEditorChange = (value: string) => {
        setContent(value);
    };

    return <>
        <IssueDetail onIssueList={onIssueList} detail={detail} isSameUser={isSameUser} />
        <SolutionList solutions={detail.solutions} isSameUser={isSameUser} content={content} onEditorChange={onEditorChange} />
    </>
}
export default DetailContainer;