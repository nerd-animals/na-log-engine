import { allBios } from 'contentlayer/generated';
import Image from 'next/image';
import MdxComponent from './MdxComponent';

export function getBioData() {
  return allBios[0];
}

export default function Bio() {
  return (
    <div className="bio">
      <Image
        className="bio-profile"
        src={allBios[0].imagePath}
        alt="profile"
        width={200}
        height={200}
      />
      <div className="bio-introduction">
        <MdxComponent code={allBios[0].body.code} />
      </div>
    </div>
  );
}
