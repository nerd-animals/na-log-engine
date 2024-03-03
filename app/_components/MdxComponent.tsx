import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface MDXProps {
  code: string;
}

interface ImgProps {
  src: string;
  alt: string;
}

const component = {
  img: (props: ImgProps) => (
    <Image
      src={
        props.src.startsWith('http')
          ? props.src
          : `${publicRuntimeConfig.basePath}/${props.src}`
      }
      alt={props.alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '50%', height: 'auto' }}
    />
  ),
};

export default function MdxComponent(props: MDXProps) {
  const { code } = props;
  const MDX = useMDXComponent(code);
  // @ts-ignore
  return <MDX components={component} />;
}
