import { allBios } from 'contentlayer/generated';
import Image from 'next/image';
import AboutContent from 'app/about/_components/AboutContent';
import MdxComponent from './MdxComponent';
import defaultProfile from '../assets/default_profile.png';

export default function Bio() {
  return (
    <div className="bio">
      <Image
        className="bio-profile"
        src={allBios[0].imagePath || defaultProfile}
        alt="profile"
        width={200}
        height={200}
      />
      <AboutContent>
        <div className="bio-introduction">
          <MdxComponent code={allBios[0].body.code} />
        </div>
      </AboutContent>
    </div>
  );
}
