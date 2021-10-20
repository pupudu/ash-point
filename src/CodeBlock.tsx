import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlight from "react-highlight.js";
import { Button, Box } from "@chakra-ui/react";

export function CodeBlock(props: any) {
  const text = props.code.trim();
  return (
    <>
      <Box my="1rem">
        <Highlight language="javascript">{text}</Highlight>
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
