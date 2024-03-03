import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface MDXProps {
  code: string;
}

export default function MdxComponent(props: MDXProps) {
  const { code } = props;
  const MDX = useMDXComponent(code);
  return (
    <MDX
      components={{
        // Todo: 경고 원인 파악 필요
        // @ts-ignore
        // eslint-disable-next-line
        img: () => <Image />,
      }}
    />
  );
}
