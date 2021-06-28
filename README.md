# use-is-truncated

[![NPM](https://img.shields.io/npm/v/@closeio/use-is-truncated.svg)](https://www.npmjs.com/package/@closeio/use-is-truncated) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-success)](https://prettier.io)

Simple React hook TBA.

[Check the live DEMO](https://closeio.github.io/use-is-truncated/).

### <img height="40px" src="./close.svg" />

Interested in working on projects like this? [Close](https://close.com) is looking for [great engineers](https://jobs.close.com) to join our team!

## Install

```bash
yarn add @closeio/use-is-truncated
```

## Usage

### Show a tooltip for elements that are truncated

```jsx
import React from 'react';
import useIsTruncated from '@closeio/use-is-truncated';

function TooltipTruncated({ content, children, ...props }) {
  const [ref, isTruncated] = useIsTruncated(children);

  return (
    <span ref={ref} title={isTruncated ? content : null} {...props}>
      {children}
    </span>
  );
}

const MyOverlyLongLabel = (
  <div className="MyLabel">
    <TooltipTruncated content="This is a label that is too long to show">
      This is a label that is too long to show
    </TooltipTruncated>
  </div>
);
```

```css
.MyLabel {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## License

MIT © [Close](https://github.com/closeio)
