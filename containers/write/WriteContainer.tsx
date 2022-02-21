import Router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  createIssue,
  createTempIssue,
  selectIssueTemp,
} from "api/modules/issue";
import IssueWrite from "components/write/IssueWrite";
import { toggleAtom } from "store/atom";

const WriteContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<any>([]);
  const [toggle, setToggle] = useRecoilState(toggleAtom);

  useEffect(() => {
    async function selectTemp() {
      const { data } = await selectIssueTemp();
      if (data) {
        const response = confirm("임시저장된 글을 불러오시겠습니까?");
        if (response) {
          setTitle(data.title);
          setContent(data.content);
        }
      }
    }
    selectTemp();
  }, []);

  const setChagneTag = (e: any) => {
    if (tag.length > 10) {
      e.target.value = "";
      alert("최대 10개 까지의 태그만 입력가능합니다.");
      return;
    }
    if (e.keyCode === 13) {
      if (e.target.value.length > 20 || e.target.value.trim().length == 0) {
        e.target.value = "";
        alert("1 ~ 10자 까지의 태그를 입력하세요");
        return;
      }
      if (tag.includes(e.target.value)) {
        e.target.value = "";
        alert("이미 있는 태그입니다");
        return;
      }
      setTag([...tag, e.target.value]);
      e.target.value = "";
    }
  };

  const setDeleteTag = (index: number) => {
    setTag(tag.filter((value: string, idx: any) => idx !== index));
  };

  const addIssue = async () => {
    const response = await createIssue({
      title: title,
      content: content,
      docType: "TEXT",
      hashtags: tag,
    });
    if (response.status === 200) {
      setToggle(true);
      Router.push("/issue");
    }
  };

  const addIssueTemp = async () => {
    const response = await createTempIssue({
      title: title,
      content: content,
      docType: "TEXT",
      hashtags: tag,
    });
    if (response.status === 200) {
      alert("임시저장이 완료되었습니다");
    }
  };
  return (
    <IssueWrite
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      tag={tag}
      setChagneTag={setChagneTag}
      setDeleteTag={setDeleteTag}
      addIssue={addIssue}
      addIssueTemp={addIssueTemp}
    />
  );
};
export default WriteContainer;
