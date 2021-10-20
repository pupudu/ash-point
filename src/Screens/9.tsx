import { CodeBlock } from '../CodeBlock';

const text = `
const timestamp = Date.now();
console.assert(timestamp % 2 === 0, 'This timestamp is not even!', timestamp);
`;

export default function Screen9(p: any) {
  return (
    <div>
      <h1>{p.count}. console.assert</h1>
      <CodeBlock code={text} />
    </div>
  );
}
