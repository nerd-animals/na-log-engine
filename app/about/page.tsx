import BlogSection from './_components/BlogSection';
import IntroSection from './_components/IntroSection';
import ProjectSection from './_components/ProjectSection';

export default function About() {
  return (
    <main>
      <div className="about-wrapper">
        <IntroSection />
        <BlogSection />
        <ProjectSection />
      </div>
    </main>
  );
}
