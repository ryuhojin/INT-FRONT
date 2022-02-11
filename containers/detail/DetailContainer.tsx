import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IssueDetail from "../../components/detail/IssueDetail";
import SolutionList from "../../components/detail/SolutionList";
import { RootState } from "../../store/modules";
import Router from "next/router";

import "highlight.js/styles/github-dark.css";
import "react-quill/dist/quill.snow.css";
import { deleteSolution, selectSolutionList, createSolution, updateSolution, adobtSolution, recommendSolution, selectSolution } from "../../api/modules/solution";
import { deleteIssue } from "../../api/modules/issue";
import { getSearchListThunk } from "../../store/modules/search";

const DetailContainer = ({ detail }: any) => {
    const [content, setContent] = useState("");
    const [solutionList, setSolutionList] = useState<any>(detail.solutions);
    const { user } = useSelector((state: RootState) => state.user.user);
    const { search } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
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
            getSolutionById(id);
        }
    }

    const updSolution = async (id: number, content: string) => {
        const response = await updateSolution({ id: id, content: content, docType: "TEXT" });
        if (response.status === 200) {
            getSolutionById(id);
        }
    }

    const delSolution = async (id: number) => {
        const response = await deleteSolution(id);
        if (response.status === 200) {
            getSolution();
        }
    }

    const getSolution = async () => {
        const response = await selectSolutionList(Number(detail.id));
        if (response.status === 200) {
            setSolutionList([...response.data.content]);
        }
    }

    const getSolutionById = async (id: number) => {
        const response = await selectSolution(id);
        if (response.status === 200) {
            setSolutionList(solutionList.map((v: any) => v.id === response.data.id ? response.data : v));
        }
    }

    const adtSolution = async (id: number) => {
        const response = await adobtSolution(id);
        if (response.status === 200) {
            getSolution();
        }
    };
    const delIssue = async (id: number) => {
        const response = await deleteIssue(id);
        if (response.status === 200) {
            dispatch(getSearchListThunk(search))
            Router.push('/issue')
        }
    }

    const onIssueList = () => {
        Router.push('/issue')
    }
    const onEditorChange = (value: string) => {
        setContent(value);
    };

    return <>
        <IssueDetail onIssueList={onIssueList} delIssue={delIssue} detail={detail} isSameUser={isSameUser} />
        <SolutionList solutions={solutionList} getSolution={getSolution} getSolutionById={getSolutionById} isSameUser={isSameUser} content={content} onEditorChange={onEditorChange} addSolution={addSolution} recSolution={recSolution} updSolution={updSolution} delSolution={delSolution} adtSolution={adtSolution} />
    </>
}
export default DetailContainer;