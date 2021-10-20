import ReactMD from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export function MD(props: any) {
  return (
    <div className="markdown-body">
      <ReactMD
        components={ChakraUIRenderer()}
        remarkPlugins={[remarkGfm]}
        {...props}
      />
    </div>
  );
}
