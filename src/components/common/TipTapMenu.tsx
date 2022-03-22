import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatStrikethrough,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdCode,
  MdHorizontalRule,
  MdUndo,
  MdRedo,
} from "react-icons/md";
import { RiParagraph, RiH1, RiH2, RiH3, RiH4, RiH5 } from "react-icons/ri";
import styled from "styled-components";
const TipTapMenuStyle = styled.div`
  border-bottom: 1px solid black;
  .ml-05 {
    margin-left: 0.05rem;
  }
  .ml-1 {
    margin-left: 0.1rem;
  }
  .ml-2 {
    margin-left: 0.2rem;
  }
  .is-active {
    color: orange;
  }
`;
const TipTapMenu = ({ editor }: any) => {
  if (!editor) return null;
  const size = 25;
  return (
    <TipTapMenuStyle>
      <MdFormatBold
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      />
      <MdFormatItalic
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={"ml-05 " + (editor.isActive("italic") ? "is-active" : "")}
      />
      <MdFormatUnderlined
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={"ml-05 " + (editor.isActive("underline") ? "is-active" : "")}
      />
      <MdFormatStrikethrough
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={"ml-05 " + (editor.isActive("strike") ? "is-active" : "")}
      />
      &nbsp;&nbsp;&nbsp;
      <input
        type="color"
        style={{
          background: "transparent",
          border: "0",
          width: "2.2rem",
          verticalAlign: "bottom",
        }}
        onInput={(event) =>
          editor.chain().focus().setColor(event.currentTarget.value).run()
        }
        value={editor.getAttributes("textStyle").color || ""}
      />
      <RiParagraph
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      />
      <RiH1
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          "ml-2 " +
          (editor.isActive("heading", { level: 1 }) ? "is-active" : "")
        }
      />
      <RiH2
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          "ml-2 " +
          (editor.isActive("heading", { level: 2 }) ? "is-active" : "")
        }
      />
      <RiH3
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          "ml-2 " +
          (editor.isActive("heading", { level: 3 }) ? "is-active" : "")
        }
      />
      <RiH4
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          "ml-2 " +
          (editor.isActive("heading", { level: 4 }) ? "is-active" : "")
        }
      />
      <RiH5
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          "ml-2 " +
          (editor.isActive("heading", { level: 5 }) ? "is-active" : "")
        }
      />
      &nbsp;&nbsp;&nbsp;
      <MdFormatListBulleted
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={"ml-1 " + (editor.isActive("bulletList") ? "is-active" : "")}
      />
      <MdFormatListNumbered
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          "ml-1 " + (editor.isActive("orderedList") ? "is-active" : "")
        }
      />
      &nbsp;&nbsp;&nbsp;
      <MdFormatQuote
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      />
      <MdCode
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={"ml-1 " + (editor.isActive("codeBlock") ? "is-active" : "")}
      />
      <MdHorizontalRule
        className="ml-1"
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      />
      &nbsp;&nbsp;&nbsp;
      <MdUndo
        className="ml-1"
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().undo().run()}
      />
      <MdRedo
        className="ml-1"
        size={size}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().redo().run()}
      />
    </TipTapMenuStyle>
  );
};
export default React.memo(TipTapMenu);
