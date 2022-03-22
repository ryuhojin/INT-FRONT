import {
  createComment,
  deleteComment,
  updateComment,
} from "api/modules/comment";
import { deleteIssue } from "api/modules/issue";
import {
  adobtSolution,
  createSolution,
  deleteSolution,
  recommendSolution,
  selectSolution,
  selectSolutionList,
  updateSolution,
} from "api/modules/solution";
import { followUser } from "api/modules/user";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Dialog from "src/components/common/Dialog";
import TipTap from "src/components/common/TipTap";
import SolutionEditor from "src/components/editor/SolutionEditor";
import Detail from "src/components/issue/Detail";
import { authAtom, toggleAtom } from "store/atom";
const DetailContainer = ({ detail }: any) => {
  const editorRef = useRef<any>();
  const solutionEditorRef = useRef<any>();
  const user: any = useRecoilValue(authAtom);
  const [solutionList, setSolutionList] = useState<any>(detail.solutions);
  const setToggle = useSetRecoilState(toggleAtom);
  const [popup, setPopup] = useState(false);
  const [editSolution, setEditSolution] = useState({ id: 0, content: "" });
  const addSolution = async () => {
    const response = await createSolution({
      issueId: Number(detail.id),
      content: editorRef.current.props.editor.getHTML(),
      docType: "TEXT",
    });
    if (response.status === 200) {
      getSolution();
      editorRef.current.props.editor.commands.setContent("");
    }
  };
  const getSolution = async () => {
    const response = await selectSolutionList(Number(detail.id));
    if (response.status === 200) {
      setSolutionList([...response.data.content]);
    }
  };

  const getSolutionById = async (id: number) => {
    const response = await selectSolution(id);
    if (response.status === 200) {
      setSolutionList(
        solutionList.map((v: any) =>
          v.id === response.data.id ? response.data : v
        )
      );
    }
  };
  const adtSolution = async (id: number) => {
    const response = await adobtSolution(id);
    if (response.status === 200) {
      getSolution();
    }
  };
  const updSolution = async () => {
    if (editSolution.id == 0) return;
    const response = await updateSolution({
      id: editSolution.id,
      content: solutionEditorRef.current.props.editor.getHTML(),
      docType: "TEXT",
    });
    if (response.status === 200) {
      getSolutionById(editSolution.id);
    }
  };

  const delSolution = async (id: number) => {
    const response = await deleteSolution(id);
    if (response.status === 200) {
      getSolution();
    }
  };
  const recSolution = async (id: number) => {
    if (!user) return;
    const response = await recommendSolution(id);

    if (response.status === 200) {
      getSolutionById(id);
    }
  };
  const folUser = async (userId: string) => {
    if (!user) return;
    const response = await followUser(userId);
    if (response.status === 200) {
    }
  };

  const addComment = async (id: number, content: string) => {
    const response = await createComment({
      solutionId: id,
      content: content,
    });
    if (response.status === 200) {
      getSolution();
    }
  };

  const delComment = async (id: number) => {
    const response = await deleteComment(id);
    if (response.status === 200) {
      getSolution();
    }
  };

  const updComment = async (id: number, content: string) => {
    const response = await updateComment({
      id: id,
      content: content,
    });
    if (response.status === 200) {
      getSolution();
    }
  };
  const delIssue = async (id: number) => {
    const response = await deleteIssue(id);
    if (response.status === 200) {
      setToggle(true);
      Router.push("/issue");
    }
  };
  const updIssue = (detail: any) => {
    Router.push({ pathname: "/issue/update", query: detail });
  };
  const EditorDialog = () => {
    return (
      <>
        <br />
        <SolutionEditor
          height="150px"
          editorRef={solutionEditorRef}
          content={editSolution.content}
        />
        {/* <TipTap
          isEditable={true}
          height="150px"
          mode="editor"
          editorRef={solutionEditorRef}
          content={editSolution.content}
        /> */}
      </>
    );
  };
  const closeDialog = () => {
    setPopup(false);
  };
  const openDialog = (id: number, content: string) => {
    setEditSolution({ id: id, content: content });
    setPopup(true);
  };
  const confirmDialog = () => {
    updSolution();
    setEditSolution({ id: 0, content: "" });
    setPopup(false);
  };

  return (
    <>
      <Dialog
        title="변경"
        visible={popup}
        onCancel={closeDialog}
        onConfirm={confirmDialog}
      >
        <EditorDialog />
      </Dialog>
      <Detail
        detail={detail}
        user={user}
        folUser={folUser}
        delIssue={delIssue}
        updIssue={updIssue}
        solutions={solutionList}
        addSolution={addSolution}
        adtSolution={adtSolution}
        updSolution={updSolution}
        delSolution={delSolution}
        recSolution={recSolution}
        addComment={addComment}
        delComment={delComment}
        updComment={updComment}
        openDialog={openDialog}
        editorRef={editorRef}
      />
    </>
  );
};
export default DetailContainer;
