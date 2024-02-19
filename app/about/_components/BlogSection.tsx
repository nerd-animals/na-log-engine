import LineHeader from './LineHeader';
import AboutContent from './AboutContent';

export default function BlogSection() {
  return (
    <div className="about-section">
      <LineHeader title="🔍 What is Na-log?" />
      <AboutContent>
        <mark>
          <strong>Na-Log</strong>
        </mark>
        는, Raccoon과 Otter가 함께 만드는 Tech git-blog입니다.
        <p>
          개발하면서 생기는 <strong>No answer</strong>을{' '}
          <strong>Yes answer</strong>으로 해결하는 과정을 담으려고 합니다.
          <br />
          저희들의 성장 과정을 기록할 수 있도록 블로그 운영을 고려하게 되었고,
          개발 역량을 향상시키기 위해 자체 개발을 하게 되었습니다! 😊
        </p>
      </AboutContent>
    </div>
  );
}
