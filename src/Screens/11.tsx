import { CodeBlock } from '../CodeBlock';

const text = `
console.log('%c Hasta La Vista!', 'color: red; font-size: 30px;');
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. console.group</h1>
      <CodeBlock code={text} />
    </div>
  );
};
