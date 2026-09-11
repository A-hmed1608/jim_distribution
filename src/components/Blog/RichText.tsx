import React from 'react';

export const RichText = ({ content }: { content: any }) => {
  if (!content) return null;

  // If content is already a string
  if (typeof content === 'string') {
    return (
      <div
        className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed dark:text-white/80"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
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

      // Format bitwise flags: 1=Bold, 2=Italic, 4=Strikethrough, 8=Underline, 16=Code
      if (node.format & 1) {
        textNode = (
          <strong key={`b-${index}`} className="text-primary font-bold dark:text-white">
            {textNode}
          </strong>
        );
      }
      if (node.format & 2) {
        textNode = <em key={`i-${index}`}>{textNode}</em>;
      }
      if (node.format & 4) {
        textNode = <s key={`s-${index}`} className="line-through">{textNode}</s>;
      }
      if (node.format & 8) {
        textNode = (
          <span key={`u-${index}`} className="text-primary underline dark:text-white">
            {textNode}
          </span>
        );
      }
      if (node.format & 16) {
        textNode = (
          <code key={`c-${index}`} className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
            {textNode}
          </code>
        );
      }

      // Handle TextColor and HighlightColor from payloadcms-lexical-ext (stored in node.style or node.$)
      const textColor = node.$?.color || node.style?.match?.(/color:\s*([^;]+)/)?.[1];
      const bgColor = node.$?.highlight || node.$?.backgroundColor || node.style?.match?.(/background-color:\s*([^;]+)/)?.[1];

      // Also check the inline style string directly
      const styleStr = typeof node.style === 'string' ? node.style : '';
      const inlineTextColor = textColor || styleStr.match(/(?:^|;\s*)color:\s*([^;]+)/)?.[1];
      const inlineBgColor = bgColor || styleStr.match(/background-color:\s*([^;]+)/)?.[1];

      if (inlineTextColor || inlineBgColor) {
        const inlineStyle: React.CSSProperties = {};
        if (inlineTextColor) inlineStyle.color = inlineTextColor;
        if (inlineBgColor) {
          inlineStyle.backgroundColor = inlineBgColor;
          inlineStyle.padding = '0.125rem 0.25rem';
          inlineStyle.borderRadius = '0.25rem';
        }
        textNode = (
          <span key={`color-${index}`} style={inlineStyle}>
            {textNode}
          </span>
        );
      }

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
              'font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white',
          },
          children
        );

      case 'paragraph':
        return (
          <p
            key={index}
            className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed dark:text-white/80"
          >
            {children}
          </p>
        );

      case 'list':
        if (node.listType === 'number') {
          return (
            <ol key={index} className="text-body-color mb-10 list-inside list-decimal dark:text-white/80">
              {children}
            </ol>
          );
        }
        return (
          <ul key={index} className="text-body-color mb-10 list-inside list-disc dark:text-white/80">
            {children}
          </ul>
        );

      case 'listitem':
        return (
          <li key={index} className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg dark:text-white/80">
            {children}
          </li>
        );

      // Quote Block — مطابق تماماً للـ blog-details static page
      case 'quote':
        return (
          <div
            key={index}
            className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9"
          >
            <p className="text-body-color dark:text-white/90 text-center text-base font-medium italic">
              {children}
            </p>

            {/* Decorative Top-Left SVG — identical to blog-details */}
            <span className="absolute top-0 left-0 z-[-1]">
              <svg
                width="132"
                height="109"
                viewBox="0 0 132 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                  fill="url(#paint0_linear_111_606)"
                />
                <path
                  opacity="0.5"
                  d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                  fill="url(#paint1_linear_111_606)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_111_606"
                    x1="94.7523"
                    y1="82.0246"
                    x2="8.40951"
                    y2="52.0609"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.06" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_111_606"
                    x1="90.3206"
                    y1="58.4236"
                    x2="1.16149"
                    y2="50.8365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.06" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            {/* Decorative Bottom-Right SVG — identical to blog-details */}
            <span className="absolute right-0 bottom-0 z-[-1]">
              <svg
                width="53"
                height="30"
                viewBox="0 0 53 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.8" cx="37.5" cy="37.5" r="37.5" fill="#4A6CF7" />
                <mask
                  id="mask0_111_596"
                  style={{ maskType: "alpha" } as React.CSSProperties}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="75"
                  height="75"
                >
                  <circle opacity="0.8" cx="37.5" cy="37.5" r="37.5" fill="#4A6CF7" />
                </mask>
                <g mask="url(#mask0_111_596)">
                  <circle opacity="0.8" cx="37.5" cy="37.5" r="37.5" fill="url(#paint0_radial_111_596)" />
                  <g opacity="0.8" filter="url(#filter0_f_111_596)">
                    <circle cx="40.8089" cy="19.853" r="15.4412" fill="white" />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_111_596"
                    x="4.36768"
                    y="-16.5881"
                    width="72.8823"
                    height="72.8823"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_111_596" />
                  </filter>
                  <radialGradient
                    id="paint0_radial_111_596"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                  >
                    <stop stopOpacity="0.47" />
                    <stop offset="1" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </span>
          </div>
        );

      // Link Node
      case 'link':
        return (
          <a
            key={index}
            href={node.fields?.url || '#'}
            target={node.fields?.newTab ? '_blank' : undefined}
            rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
            className="text-primary underline dark:text-white"
          >
            {children}
          </a>
        );

      // Upload/Image node from Lexical
      case 'upload':
        const uploadUrl = node.value?.url || node.url;
        const uploadAlt = node.value?.alt || node.alt || 'image';
        if (uploadUrl) {
          return (
            <div key={index} className="mb-10 w-full overflow-hidden rounded-sm">
              <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                <img
                  src={uploadUrl}
                  alt={uploadAlt}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
          );
        }
        return null;

      default:
        return children ? <div key={index}>{children}</div> : null;
    }
  };

  return <div className="rich-text">{root.children.map((child: any, i: number) => renderNode(child, i))}</div>;
};

export default RichText;
