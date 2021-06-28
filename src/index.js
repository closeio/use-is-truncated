import { useRef, useState, useLayoutEffect } from 'react';

/**
 * Return whether an element is truncated (by overflow:hidden)
 * @returns {[ref: React.MutableRefObject, isTruncated: boolean]}
 */
export default function useIsTruncated(content) {
  const ref = useRef();
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    setIsTruncated(Boolean(el) && el.scrollWidth > el.clientWidth);
  }, [content]);

  return [ref, isTruncated];
}
