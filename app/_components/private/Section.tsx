import MdxComponent from 'app/_components/MdxComponent';
import LineHeader from './LineHeader';

export default function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="about-section">
      <LineHeader title={title} />
      <div className="about-content">
        <MdxComponent code={content} />
      </div>
    </div>
  );
}
