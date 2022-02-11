import Router from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIssue } from "../../api/modules/issue";
import IssueWrite from "../../components/write/IssueWrite";
import { RootState } from "../../store/modules";
import { getSearchListThunk } from "../../store/modules/search";

const WriteContainer = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState<any>([]);
    const { search } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
    
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
            docType: 'TEXT',
            hashtags: tag
        })
        if (response.status === 200) {
            dispatch(getSearchListThunk(search))
            Router.push('/issue')
        }
    }
    return <IssueWrite title={title} setTitle={setTitle} content={content} setContent={setContent} tag={tag} setChagneTag={setChagneTag} setDeleteTag={setDeleteTag} addIssue={addIssue} />
}
export default WriteContainer;