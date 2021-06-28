import React, { useRef, useState, useLayoutEffect } from 'react';

function useIsTruncated(content) {
  const ref = useRef();
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    setIsTruncated(Boolean(el) && el.scrollWidth > el.clientWidth);
  }, [content]);

  return [ref, isTruncated];
}

const TooltipTruncated = ({ content, children }) => {
  const [ref, isTruncated] = useIsTruncated(children);

  return React.cloneElement(children, {
    ref,
    title: isTruncated ? content : null,
  });
};

const MyOverlyLongLabel = () => (
  <TooltipTruncated content="This is a label that is too long to show">
    <div className="MyLabel">This is a label that is too long to show</div>
  </TooltipTruncated>
);

export default function Example() {
  return (
    <>
      <MyOverlyLongLabel />
      <input type="text" />
    </>
  );
}
