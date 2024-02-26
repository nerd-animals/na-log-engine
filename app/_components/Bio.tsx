import { allBios } from 'contentlayer/generated';
import Image from 'next/image';
import MdxComponent from './MdxComponent';

export function getBioData() {
  return allBios[0];
}

export default function Bio() {
  const bio = getBioData();

  const bioProfile = bio.imagePath && (
    <Image
      className="bio-profile"
      src={bio.imagePath}
      alt="profile"
      width={200}
      height={200}
    />
  );
  const bioIntro = bio.body.code && (
    <div className="bio-introduction">
      <MdxComponent code={bio.body.code} />
    </div>
  );

  let bioContent: JSX.Element | null = (
    <div className="bio">
      {bioProfile}
      {bioIntro}
    </div>
  );

  if (!bioProfile && !bioIntro) {
    bioContent = null;
  }
  return bioContent;
}
