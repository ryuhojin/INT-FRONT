import styled, { css } from "styled-components";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapMenu from "./TipTapMenu";

/** EXTENSION */
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import lowlight from "lowlight";
import React, { useEffect } from "react";

const ReaderStyle = styled.div`
  margin-top: 0rem;
`;

const EditorStyle = styled.div`
  border: 1px solid black;
`;

const Tiptap = (props: any) => {
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
    content: props.content ?? "",
    editable: props.isEditable,
  });
  useEffect(() => {
    editor && editor.commands.setContent(String(props.content));
  }, [props.content]);
  if (props.mode === "editor") {
    return (
      <EditorStyle>
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
      </EditorStyle>
    );
  } else {
    return (
      <ReaderStyle>
        <EditorContent
          editor={editor}
          style={{ minHeight: props.height }}
          className="content"
        />
      </ReaderStyle>
    );
  }
};

export default React.memo(Tiptap);
