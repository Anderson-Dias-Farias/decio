import { BaseEditor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomElementType =
  | "paragraph"
  | "heading-one"
  | "heading-two"
  | "block-quote"
  | "bulleted-list"
  | "numbered-list"
  | "list-item";

export type CustomTextKey = "bold" | "italic" | "underline" | "code";

export type CustomElement = {
  type: CustomElementType;
  children: CustomText[];
  align?: "left" | "center" | "right" | "justify";
};

export type CustomElementWithAlign = CustomElement & {
  align: "left" | "center" | "right" | "justify";
};

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

export interface RichTextEditorProps {
  content?: string;
  onChange: (value: string) => void;
}

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
