import React, { useState } from 'react';

import useIsTruncated from '@closeio/use-is-truncated';

const TooltipTruncated = ({ content, children, ...props }) => {
  const [ref, isTruncated] = useIsTruncated(children);

  return (
    <span ref={ref} title={isTruncated ? content : null} {...props}>
      {children}
    </span>
  );
};

const MyOverlyLongLabel = () => (
  <div className="MyLabel">
    <TooltipTruncated content="This is a label that is too long to show">
      This is a label that is too long to show
    </TooltipTruncated>
  </div>
);

export default function Example() {
  return (
    <>
      <MyOverlyLongLabel />
      <input type="text" />
    </>
  );
}
