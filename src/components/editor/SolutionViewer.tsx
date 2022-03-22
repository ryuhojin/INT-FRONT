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

const StyledSolutionViewer = styled.div`
  margin-top: 0rem;
`;
const SolutionViewer = (props: any) => {
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
    content: props.content,
    editable: false,
  });
  return (
    <StyledSolutionViewer>
      <EditorContent
        editor={editor}
        style={{ minHeight: props.height }}
        className="content"
      />
    </StyledSolutionViewer>
  );
};
export default React.memo(SolutionViewer);
