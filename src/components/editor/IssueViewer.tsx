import styled, { css } from "styled-components";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
/** EXTENSION */
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import lowlight from "lowlight";
import React from "react";

const StyledIssueViewer = styled.div`
  margin-top: 0rem;
`;
const IssueViewer = (props: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Blockquote,
      TextStyle,
      Color,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: props.content,
    editable: false,
  });
  return (
    <StyledIssueViewer>
      <EditorContent
        editor={editor}
        style={{ minHeight: props.height }}
        className="content"
      />
    </StyledIssueViewer>
  );
};
export default React.memo(IssueViewer);
