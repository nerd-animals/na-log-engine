import LineHeader from './LineHeader';
import TechList from './TechList';

export default function ProjectSection() {
  return (
    <div className="about-section">
      <LineHeader title="📽️ Project" />
      <div className="about-project">
        <div className="about-project-title">todo-list</div>
        <div className="about-project-content">
          <TechList techList={['typescript', 'next.js', 'react']} />
          <div className="about-project-description">
            todo-list를 만들었습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
