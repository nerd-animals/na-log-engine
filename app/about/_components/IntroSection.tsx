import LineHeader from './LineHeader';
import AboutContent from './AboutContent';
import Member from './Member';

export default function IntroSection() {
  return (
    <div className="about-section">
      <LineHeader title="😎 Who are we?" />
      <AboutContent>
        <h3>
          <mark>
            <strong>NerdAnimals</strong>
          </mark>
          : 괴짜 동물들
        </h3>

        <p>
          안녕하세요! 저희는 주니어 개발자와 개발자 취준생이 한 팀으로 개발자의
          꿈을 향해 나아가고 있습니다.
        </p>
        <Member />
      </AboutContent>
    </div>
  );
}
