import { allAbouts } from 'contentlayer/generated';
import Section from './_components/Section';

export default function About() {
  return (
    <main className="about-wrapper">
      {allAbouts.map((about) => (
        <Section
          key={about._id}
          title={about.title}
          content={about.body.code}
        />
      ))}
    </main>
  );
}
