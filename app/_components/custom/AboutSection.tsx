import DividerTitle from '@/_components/design/DividerTitle';
import MdxComponent from '@/_components/mdx/MdxComponent';
import { About } from 'lib/AboutManager';

export default function Section({ about }: { about: About }) {
  return (
    <div className="about-section">
      <DividerTitle title={about.title} />
      <div className="about-content">
        <MdxComponent code={about.content} />
      </div>
    </div>
  );
}
