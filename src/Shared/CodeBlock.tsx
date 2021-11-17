import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import 'highlight.js/styles/hybrid.css';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

export function CodeBlock(props: any) {
  const text = props.code.trim();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current && hljs.highlightElement(ref.current);
  });

  return (
    <>
      <Box my="1rem">
        <Box component="pre">
          <Box component="code" className="language-typescript" ref={ref}>
            {text}
          </Box>
        </Box>
      </Box>
      <CopyToClipboard text={text}>
        <Button>Copy</Button>
      </CopyToClipboard>
      <Button
        onClick={() => {
          eval(text);
        }}
      >
        Execute
      </Button>
    </>
  );
}
