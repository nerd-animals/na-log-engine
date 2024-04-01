import DividerTitle from '@/_components/design/DividerTitle';
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
      <DividerTitle title={title} />
      <div className="about-content">
        <MdxComponent code={content} />
      </div>
    </div>
  );
}
