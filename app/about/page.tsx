import { allAbouts } from 'contentlayer/generated';
import BlogSection from './_components/BlogSection';
import ProjectSection from './_components/ProjectSection';
import Section from './_components/Section';

export default function About() {
  return (
    <main className="about-wrapper">
      {allAbouts.map((about) => (
        <>
          <Section title={about.title} sectionCode={about.body.code} />
          <BlogSection />
          <ProjectSection />
        </>
      ))}
    </main>
  );
}
