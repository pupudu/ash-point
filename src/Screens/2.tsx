import { CodeBlock } from '../CodeBlock';
import { Link } from 'react-router-dom';

const text = `
function run() {
  console.time('Herry!')
  for (let i = 0; i < 1000; i++) {
    const x = i*i*i;
  }
  console.timeEnd('Herry!')
}
run();
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. console.time</h1>
      <CodeBlock code={text} />
    </div>
  );
};
