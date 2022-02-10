/** 내장 */
import { useMemo } from "react";
import dynamic from "next/dynamic";
/** 라이브러리(하이라이트 / 편집기) */
import hljs from "highlight.js";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = (props: any) => {
    hljs.configure({
        languages: ["javascript", "java", "python"],
    });
    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ["link"],
                [{ align: [] }, { color: [] }, { background: [] }],
                ["clean"],
                ["code-block"],
            ],
            syntax: {
                highlight: (text: string) => hljs.highlightAuto(text).value,
            },
        };
    }, []);
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "indent",
        "link",
        "align",
        "color",
        "background",
    ];

    return (
        <ReactQuill
            style={props.height ? { height: props.height } : { height: "400px" }}
            value={props.value}
            onChange={props.onChange}
            formats={formats}
            modules={modules}
        />
    );
};

export default QuillEditor;
