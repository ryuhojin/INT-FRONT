import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIssue, updateIssue } from "../../api/modules/issue";
import IssueUpdate from "../../components/write/IssueUpdate";
import { RootState } from "../../store/modules";
import { getSearchListThunk } from "../../store/modules/search";

const UpdateContainer = () => {
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState<any>([]);
    const { search } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
    useEffect(() => {
        if (Object.keys(router.query).length == 0) return;
        setTitle(String(router.query.title))
        setContent(String(router.query.content))
        setTag(Array.isArray(router.query.hashtags) ? router.query.hashtags : [router.query.hashtags])
    }, [router.query])
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

    const updIssue = async () => {
        const response = await updateIssue({
            id: Number(router.query.id),
            title: title,
            content: content,
            docType: 'TEXT',
            hashtags: tag
        })
        if (response.status === 200) {
            dispatch(getSearchListThunk(search))
            Router.push(`/issue/${router.query.id}`)
        }
    }
    return <IssueUpdate title={title} setTitle={setTitle} content={content} setContent={setContent} tag={tag} setChagneTag={setChagneTag} setDeleteTag={setDeleteTag} updIssue={updIssue} />
}
export default UpdateContainer;