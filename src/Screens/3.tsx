import { CodeBlock } from "../CodeBlock";

const text = `
function run() {
  console.time('Herry!')
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 1000; i++) {
      const x = i*i*i;
    }
    console.timeLog('Herry!')
  }
}
run();
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. console.timeLog</h1>
      <CodeBlock code={text} />
    </div>
  );
};
