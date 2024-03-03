import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface MDXProps {
  code: string;
}

const components = {
  img: (props: any) => (
    <Image
      src={props.src}
      alt={props.alt || ''}
      width={props.width || 200}
      height={props.height || 200}
    />
  ),
};

export default function MdxComponent(props: MDXProps) {
  const { code } = props;
  const MDX = useMDXComponent(code);
  return <MDX components={components} />;
}
