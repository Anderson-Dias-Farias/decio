// Type definitions for the article content structure (matching RichTextEditor)
type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  fontSize?: number;
  url?: string;
} & {
  [key: string]: boolean | number | string | undefined;
};

type CustomElement = {
  type:
    | "paragraph"
    | "block-quote"
    | "bulleted-list"
    | "numbered-list"
    | "list-item";
  children: (CustomText | CustomElement)[]; // Allow nested elements
  align?: "left" | "center" | "right" | "justify";
};

export type TextContent = (CustomElement | CustomText)[];

// Function to render a single node (text or element)
function renderNode(node: CustomElement | CustomText, index: number): React.ReactNode {
  // Type guard to check if it's a text node
  if ("text" in node) {
    let element: React.ReactNode = node.text;

    // Apply text formatting
    if (node.bold) {
      element = <strong key={index}>{element}</strong>;
    }
    if (node.italic) {
      element = <em key={index}>{element}</em>;
    }
    if (node.underline) {
      element = <u key={index}>{element}</u>;
    }
    if (node.strikethrough) {
      element = <del key={index}>{element}</del>;
    }
    if (node.fontSize) {
      element = (
        <span key={index} style={{ fontSize: `${node.fontSize}px` }}>
          {element}
        </span>
      );
    }
    if (node.url) {
      element = (
        <a
          key={index}
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {element}
        </a>
      );
    }
    return element;
  }

  // It's an element node
  const style: React.CSSProperties = {};
  if (node.align) {
    style.textAlign = node.align;
  }

  // Recursively render children
  const children = node.children.map(renderNode);

  // Handle empty paragraphs
  if (
    node.type === "paragraph" &&
    (children.length === 0 ||
      (children.length === 1 &&
        typeof children[0] === "string" &&
        children[0] === ""))
  ) {
    return <br key={index} />;
  }

  // Render different element types
  switch (node.type) {
    case "block-quote":
      return (
        <blockquote
          key={index}
          style={style}
          className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700"
        >
          {children}
        </blockquote>
      );

    case "list-item":
      return (
        <li key={index} style={style} className="mb-1">
          {children}
        </li>
      );

    case "numbered-list":
      return (
        <ol
          key={index}
          style={style}
          className="list-decimal list-inside my-4 space-y-1"
        >
          {children}
        </ol>
      );

    case "bulleted-list":
      return (
        <ul
          key={index}
          style={style}
          className="list-disc list-inside my-4 space-y-1"
        >
          {children}
        </ul>
      );

    case "paragraph":
    default:
      return (
        <p key={index} style={style} className="mb-4 leading-relaxed">
          {children}
        </p>
      );
  }
}

// Main function to render the entire content
export function renderContent(content: TextContent) {
  return content.map(renderNode);
}
