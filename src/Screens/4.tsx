import { CodeBlock } from "../CodeBlock";

const text = `
console.log(1, 2, 3);
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. Multiple args array</h1>
      <CodeBlock code={text} />
    </div>
  );
};
