import { useState } from "react";
import { useSelector } from "react-redux";
import IssueDetail from "../../components/detail/IssueDetail";
import SolutionList from "../../components/detail/SolutionList";
import { RootState } from "../../store/modules";
import Router from "next/router";

import "highlight.js/styles/github-dark.css";
import "react-quill/dist/quill.snow.css";
import { deleteSolution, selectSolution, createSolution, updateSolution, adobtSolution, recommendSolution } from "../../api/modules/solution";

const DetailContainer = ({ detail }: any) => {
    const [content, setContent] = useState("");
    const [solutionList, setSolutionList] = useState<any>(detail.solutions);
    const { user } = useSelector((state: RootState) => state.user.user);
    const isSameUser = user.userId == detail.developer.userId;

    const addSolution = async () => {
        const response = await createSolution({
            issueId: Number(detail.id),
            content: content,
            docType: 'TEXT'
        })
        if (response.status === 200) {
            setContent("");
            getSolution()
        }
    }
    const recSolution = async (id: number) => {
        const response = await recommendSolution(id);
        if (response.status === 200) {
            getSolution();
        }
    }

    const updSolution = async (id: number, content: string) => {
        const response = await updateSolution({ id: id, content: content, docType: "TEXT" });
        if (response.status === 200) {
            getSolution();
        }
    }

    const delSolution = async (id: number) => {
        const response = await deleteSolution(id);
        if (response.status === 200) {
            getSolution();
        }
    }

    const getSolution = async () => {
        const response = await selectSolution(Number(detail.id));
        if (response.status === 200) {
            setSolutionList([...response.data.content]);
        }
    }
    const adtSolution = async (id: number) => {
        const response = await adobtSolution(id);
        if (response.status === 200) {
            getSolution();
        }
    };

    const onIssueList = () => {
        Router.push('/issue')
    }
    const onEditorChange = (value: string) => {
        setContent(value);
    };

    return <>
        <IssueDetail onIssueList={onIssueList} detail={detail} isSameUser={isSameUser} />
        <SolutionList solutions={solutionList} getSolution={getSolution} isSameUser={isSameUser} content={content} onEditorChange={onEditorChange} addSolution={addSolution} recSolution={recSolution} updSolution={updSolution} delSolution={delSolution} adtSolution={adtSolution} />
    </>
}
export default DetailContainer;