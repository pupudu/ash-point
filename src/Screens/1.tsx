import { CodeBlock } from '../CodeBlock';
import Text from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const text = `
console.log('This is: log');
console.debug('This is: debug');
console.info('This is: info');
console.warn('This is: warn');
console.error('This is: error');
`;

export default (p: any) => {
  return (
    <div>
      <Text variant="h2">{p.count}. Log levels</Text>
      <CodeBlock code={text} />
    </div>
  );
};
