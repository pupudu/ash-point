import { useState } from "react";
import { CodeBlock } from "../CodeBlock";
import Button from "@mui/material/Button";

const text1 = `
const Herry = 63;
const Rob = 20;
const Mario = 68;
console.log('Ages', Herry, Rob, Mario);
`;

const text2 = `
const Herry = 63;
const Rob = 20;
const Mario = 68;
console.log('Ages', { Herry, Rob, Mario });
`;

export default (p: any) => {
  const [item, setItem] = useState(text1);
  return (
    <div>
      <h1>{p.count}. Multiple args object</h1>
      <CodeBlock code={item} />
      <Button onClick={() => setItem(text2)}>Show Fix</Button>
    </div>
  );
};
