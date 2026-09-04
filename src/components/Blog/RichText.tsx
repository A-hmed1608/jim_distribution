import React from 'react';

export const RichText = ({ content }: { content: any }) => {
  if (!content) return null;

  // If content is already a string
  if (typeof content === 'string') {
    return <div className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />;
  }

  // If Lexical Root
  const root = content.root || content;
  if (!root || !Array.isArray(root.children)) {
    return null;
  }

  const renderNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null;

    if (node.type === 'text') {
      let textNode: React.ReactNode = node.text || '';
      if (node.format & 1) textNode = <strong key={index} className="text-black dark:text-white font-bold">{textNode}</strong>;
      if (node.format & 2) textNode = <em key={index}>{textNode}</em>;
      if (node.format & 8) textNode = <u key={index} className="text-primary underline dark:text-white">{textNode}</u>;
      return textNode;
    }

    const children = Array.isArray(node.children)
      ? node.children.map((child: any, i: number) => renderNode(child, i))
      : null;

    switch (node.type) {
      case 'heading':
        const headingTag = node.tag || 'h3';
        return React.createElement(
          headingTag,
          {
            key: index,
            className:
              'mb-6 font-display font-bold text-black sm:text-2xl lg:text-3xl dark:text-white mt-8',
          },
          children
        );
      case 'paragraph':
        return (
          <p
            key={index}
            className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed dark:text-white/80"
          >
            {children}
          </p>
        );
      case 'list':
        if (node.listType === 'number') {
          return (
            <ol key={index} className="text-body-color mb-6 list-inside list-decimal space-y-2 dark:text-white/80">
              {children}
            </ol>
          );
        }
        return (
          <ul key={index} className="text-body-color mb-6 list-inside list-disc space-y-2 dark:text-white/80">
            {children}
          </ul>
        );
      case 'listitem':
        return (
          <li key={index} className="text-base font-medium sm:text-lg">
            {children}
          </li>
        );
      case 'quote':
        return (
          <blockquote
            key={index}
            className="bg-primary/10 border-l-4 border-primary my-8 rounded-r-md p-6 italic text-body-color dark:text-white/90"
          >
            {children}
          </blockquote>
        );
      case 'link':
        return (
          <a
            key={index}
            href={node.fields?.url || '#'}
            target={node.fields?.newTab ? '_blank' : undefined}
            rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
            className="text-primary underline hover:opacity-80"
          >
            {children}
          </a>
        );
      default:
        return children ? <div key={index}>{children}</div> : null;
    }
  };

  return <div className="rich-text">{root.children.map((child: any, i: number) => renderNode(child, i))}</div>;
};

export default RichText;
