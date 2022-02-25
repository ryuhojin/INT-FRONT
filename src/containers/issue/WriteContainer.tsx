import { createIssue } from "api/modules/issue";
import Router from "next/router";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import Write from "src/components/issue/Write";
import { messageAtom, toggleAtom } from "store/atom";
import { useMessage } from "utils/message";

const WriteContainer = () => {
    const editorRef = useRef<any>();
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState<any>([]);
    const setToggle = useSetRecoilState(toggleAtom);
    const message = useMessage();
    const onIssueWrite = async () => {
        if (!title.trim()) {
            message.show("타이틀을 입력해주세요")
            return;
        }
        const response = await createIssue({
            title: title,
            content: editorRef.current.props.editor.getHTML(),
            docType: "TEXT",
            hashtags: tag,
        });
        if (response.status === 200) {
            setToggle(true);
            Router.push("/issue/index2");
        }
    }
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

    return <Write editorRef={editorRef} tag={tag} setChangeTag={setChagneTag} setDeleteTag={setDeleteTag} title={title} setTitle={setTitle} onIssueWrite={onIssueWrite} />
}
export default WriteContainer;