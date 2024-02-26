import { allAbouts } from 'contentlayer/generated';
import Section from './_components/Section';

export default function About() {
  return (
    <main className="about-wrapper">
      {allAbouts.map((about) => (
        <Section title={about.title} sectionCode={about.body.code} />
      ))}
    </main>
  );
}
