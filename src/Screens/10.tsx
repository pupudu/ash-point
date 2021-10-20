import { CodeBlock } from '../CodeBlock';

const text = `
console.log('Important log!');
console.groupCollapsed('Less Important Logs');
console.log('Ramen');
console.log('Don Buri');
console.log('Chicken Katsu');
console.log('Okonomiyaki');
console.groupEnd('Less Important Logs');
console.log('Another important log!');
`;

export default (p: any) => {
  return (
    <div>
      <h1>{p.count}. console.group</h1>
      <CodeBlock code={text} />
    </div>
  );
};
