import LineHeader from '@/_components/design/LineHeader';
import MdxComponent from '@/_components/utility/MdxComponent';

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
