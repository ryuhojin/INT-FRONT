import styled from "styled-components";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import lowlight from "lowlight";
import TipTapMenu from "../common/TipTapMenu";
import React from "react";
const StyledEditor = styled.div`
  border: 1px solid black;
`;

const IssueEditor = (props: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: "",
    editable: true,
  });
  return (
    <StyledEditor>
      <TipTapMenu editor={editor} />
      <EditorContent
        editor={editor}
        style={{
          height: props.height,
          overflow: "auto",
          padding: "0 0.5rem",
        }}
        ref={props.editorRef}
        className="content"
      />
    </StyledEditor>
  );
};
export default React.memo(IssueEditor);
