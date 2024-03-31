import { allBios } from 'contentlayer/generated';
import Image from 'next/image';
import MdxComponent from './MdxComponent';

export function getBioData() {
  return allBios[0];
}

export default function Bio() {
  const bio = getBioData();

  const bioProfile = bio?.imagePath && (
    <Image
      className="bio-profile"
      src={bio.imagePath}
      alt="profile"
      width={200}
      height={200}
    />
  );
  const bioContent = bio?.body.code && (
    <div className="bio-content">
      <MdxComponent code={bio.body.code} />
    </div>
  );

  if (bioProfile || bioContent) {
    return (
      <div className="bio">
        {bioProfile}
        {bioContent}
      </div>
    );
  }

  if (!bioProfile && !bioContent) {
    return null;
  }
}
