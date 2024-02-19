import { useMDXComponent } from 'next-contentlayer/hooks';

interface MDXProps {
  code: string;
}

export default function MdxComponent(props: MDXProps) {
  const { code } = props;
  const MDX = useMDXComponent(code);
  return <MDX />;
}
