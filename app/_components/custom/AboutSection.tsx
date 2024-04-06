import DividerTitle from '@/_components/design/DividerTitle';
import MdxContent from '@/_components/mdx/MdxContent';
import { About } from 'lib/AboutManager';


export default function AboutSection({ about }: { about: About }) {
  return (
    <div className="about-section">
      <DividerTitle title={about.title} />
      <div className="about-content">
        <MdxContent content={about.content} />
      </div>
    </div>
  );
}
