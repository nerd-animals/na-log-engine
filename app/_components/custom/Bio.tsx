import Image from 'next/image';
import MdxContent from '@/_components/mdx/MdxContent';
import BioManager from 'lib/BioManager';

export default function Bio() {
  const bio = BioManager.getInstance().getBio();

  const bioProfile = bio?.imagePath && (
    <Image
      className="bio-profile"
      src={bio.imagePath}
      alt="profile"
      width={200}
      height={200}
    />
  );
  const bioContent = bio?.content && (
    <div className="bio-content">
      <MdxContent content={bio.content} />
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
