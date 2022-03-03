import { createIssue, createTempIssue, selectIssueTemp } from "api/modules/issue";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import Dialog from "src/components/common/Dialog";
import Write from "src/components/issue/Write";
import { messageAtom, toggleAtom } from "store/atom";
import { useDialog } from "utils/dialog";
import { useMessage } from "utils/message";

const WriteContainer = () => {
    const editorRef = useRef<any>();
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState<any>([]);
    const [temp, setTemp] = useState<any>(null);
    const [tempVisible, setTempVisible] = useState(false);
    const setToggle = useSetRecoilState(toggleAtom);
    const dialog = useDialog();
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
            Router.push("/issue");
        }
    }
    const onIssueWriteTemp = async () => {
        const response = await createTempIssue({
            title: title,
            content: editorRef.current.props.editor.getHTML(),
            docType: "TEXT",
            hashtags: tag,
        });
        if (response.status === 200) {
            message.show("임시 저장되었습니다.")
        }
    };
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
    useEffect(() => {
        async function selectTemp() {
            const response = await selectIssueTemp();
            if (response.status == 200 && response.data != null) {
                setTemp(response.data);
                setTempVisible(true);
            }
        }
        selectTemp();
    }, [])
    const onConfirmDialog = () => {
        setTitle(temp.title)
        editorRef.current.props.editor.commands.setContent(String(temp.content));
        setTemp(null);
        setTempVisible(false);
    }
    const onCancelDialog = () => {
        setTemp(null);
        setTempVisible(false);
    }
    return <>
        <Dialog visible={tempVisible} onConfirm={onConfirmDialog} onCancel={onCancelDialog}>임시 저장된 이슈가 있습니다.<br />이어서 작성하시겠습니까?</Dialog>
        <Write editorRef={editorRef} tag={tag} setChangeTag={setChagneTag} setDeleteTag={setDeleteTag} title={title} setTitle={setTitle} onIssueWrite={onIssueWrite} onIssueWriteTemp={onIssueWriteTemp} />
    </>
}
export default WriteContainer;