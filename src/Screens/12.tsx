import Text from '@mui/material/Typography';
import { MD } from '../MD';

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
      <Text variant="h1">{p.count}. Markdown</Text>
      <MD children={md} />
    </div>
  );
};
