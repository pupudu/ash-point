import ReactMD from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MD(props: any) {
  return (
    <div className="markdown-body">
      <ReactMD remarkPlugins={[remarkGfm]} {...props} />
    </div>
  );
}
