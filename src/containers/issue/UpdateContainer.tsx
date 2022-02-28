import { updateIssue } from "api/modules/issue";
import Router, { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import Update from "src/components/issue/Update";
import { toggleAtom } from "store/atom";

const UpdateContainer = () => {
    const router = useRouter()
    const editorRef = useRef<any>();
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState<any>([]);
    const setToggle = useSetRecoilState(toggleAtom);
    useEffect(() => {
        if (Object.keys(router.query).length == 0) return;
        setTitle(String(router.query.title))
        if (!editorRef.current.props.editor) return
        editorRef.current.props.editor.commands.setContent(String(router.query.content));
        setTag(router.query.hashtags)
    }, [router.query, editorRef.current])
    const setChangeTag = (e: any) => {
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

    const updIssue = async () => {
        const response = await updateIssue({
            id: Number(router.query.id),
            title: title,
            content: editorRef.current.props.editor.getHTML(),
            docType: 'TEXT',
            hashtags: tag
        })
        if (response.status === 200) {
            setToggle(true);
            Router.push(`/issue/${router.query.id}`)
        }
    }
    return <Update title={title} setTitle={setTitle} editorRef={editorRef} tag={tag} updIssue={updIssue} setChangeTag={setChangeTag} setDeleteTag={setDeleteTag} />
}
export default UpdateContainer;