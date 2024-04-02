import { allAbouts } from 'contentlayer/generated';
import AboutSection from '@/_components/custom/AboutSection';

export default function About() {
  return (
    <main className="about-wrapper">
      {allAbouts.map((about) => (
        <AboutSection
          key={about._id}
          title={about.title}
          content={about.body.code}
        />
      ))}
    </main>
  );
}
