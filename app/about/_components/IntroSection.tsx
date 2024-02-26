import { allAbouts } from 'contentlayer/generated';
import MdxComponent from 'app/_components/MdxComponent';
import LineHeader from './LineHeader';
import AboutContent from './AboutContent';

export default function IntroSection() {
  return (
    <div className="about-section">
      {allAbouts.map((about) => (
        <div>
          <LineHeader title={about.title} />
          <AboutContent>
            <MdxComponent code={about.body.code} />
          </AboutContent>
        </div>
      ))}
    </div>
  );
}
