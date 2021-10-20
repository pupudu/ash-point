import { useState } from "react";
import { CodeBlock } from "../CodeBlock";
import Button from "@mui/material/Button";

const text1 = `
console.log(
  {name: 'Herry', age: 63}, 
  {name: 'Rob', age: 20}
);
`;

const text2 = `
console.table([
  {name: 'Herry', age: 63}, 
  {name: 'Rob', age: 20}
]);
`;

export default (p: any) => {
  const [item, setItem] = useState(text1);
  return (
    <div>
      <h1>{p.count}. console.table</h1>
      <CodeBlock code={item} />
      <Button onClick={() => setItem(text2)}>Show Fix</Button>
    </div>
  );
};
