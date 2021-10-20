import { CodeBlock } from '../CodeBlock';

const text = `
const limit = Math.ceil(Math.random() * 5);
function run() {
  for (let i = 0; i < limit; i++) {
    const x = i*i*i;
    console.count('Ma Cheng');
  }
}
run();
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. console.count</h1>
      <CodeBlock code={text} />
    </div>
  );
};
