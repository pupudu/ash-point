import { CodeBlock } from '../CodeBlock';

const text = `
function Service() {
  Dao();
}

function Manager() {
  Service();
}

function Controller() {
  Manager();
}

function Dao() {
  console.trace();
}

Controller();
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. console.trace</h1>
      <CodeBlock code={text} />
    </div>
  );
};
