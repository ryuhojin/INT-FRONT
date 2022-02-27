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
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import Detail from "src/components/issue/Detail";
import { authAtom } from "store/atom";
// TODO
// 솔루션 수정 (팝업으로 구현해야됨)
// 이슈 등록 삭제 수정 / 팔로우 구현해야됨
const DetailContainer = ({ detail }: any) => {
  const editorRef = useRef<any>();
  const user: any = useRecoilValue(authAtom);
  const [solutionList, setSolutionList] = useState<any>(detail.solutions);
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
  const updSolution = async (id: number, content: string) => {
    const response = await updateSolution({
      id: id,
      content: content,
      docType: "TEXT",
    });
    if (response.status === 200) {
      getSolutionById(id);
    }
  };

  const delSolution = async (id: number) => {
    const response = await deleteSolution(id);
    if (response.status === 200) {
      getSolution();
    }
  };
  const recSolution = async (id: number) => {
    if (Object.keys(user).length == 0) return;
    const response = await recommendSolution(id);
    if (response.status === 200) {
      getSolutionById(id);
    }
  };
  const folUser = async (userId: string) => {
    if (Object.keys(user).length == 0) return;
    const response = await followUser(userId);
    if (response.status === 200) {
    }
  };

  return (
    <Detail
      detail={detail}
      user={user}
      folUser={folUser}
      solutions={solutionList}
      addSolution={addSolution}
      adtSolution={adtSolution}
      updSolution={updSolution}
      delSolution={delSolution}
      recSolution={recSolution}
      editorRef={editorRef}
    />
  );
};
export default DetailContainer;
