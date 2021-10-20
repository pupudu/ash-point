import { Heading } from "@chakra-ui/react";
import { MD } from "../MD";

const md = `

#### A block quote 
> with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

#### A table:

| Column 1 | Column 2 |
| - | - |
| 1 | 2 |
| - | - |

`;

export default (p: any) => {
  return (
    <div>
      <Heading>{p.count}. Markdown</Heading>
      <MD children={md} />
    </div>
  );
};
