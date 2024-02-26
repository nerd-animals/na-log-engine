import MdxComponent from 'app/_components/MdxComponent';
import LineHeader from './LineHeader';

export default function Section({
  title,
  sectionCode,
}: {
  title: string;
  sectionCode: string;
}) {
  return (
    <div className="about-section">
      <LineHeader title={title} />
      <div className="about-content">
        <MdxComponent code={sectionCode} />
      </div>
    </div>
  );
}
