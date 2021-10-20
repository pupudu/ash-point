import { CodeBlock } from "../CodeBlock";
import { Heading } from "@chakra-ui/react";

const text = `
console.log('This is: log');
console.debug('This is: debug');
console.info('This is: info');
console.warn('This is: warn');
console.error('This is: error');
`;

export default (p: any) => {
  return (
    <div>
      <Heading>{p.count}. Log levels</Heading>
      <CodeBlock code={text} />
    </div>
  );
};
