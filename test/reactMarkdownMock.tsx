import React from "react";

type MarkdownMockProps = {
  children?: string;
  components?: {
    a?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  };
};

const LINK_ONLY_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

const ReactMarkdownMock: React.FC<MarkdownMockProps> = ({
  children = "",
  components,
}) => {
  const match = children.match(LINK_ONLY_PATTERN);
  if (match) {
    const [, label, href] = match;
    const Anchor = components?.a ?? "a";
    return <Anchor href={href}>{label}</Anchor>;
  }

  return <>{children}</>;
};

export default ReactMarkdownMock;
