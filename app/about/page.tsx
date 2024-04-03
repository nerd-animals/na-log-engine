import AboutSection from '@/_components/custom/AboutSection';
import AboutManager from 'lib/AboutManager';

export default function About() {
  const allAbouts = AboutManager.getInstance().getAllAbout();

  return (
    <main className="about-wrapper">
      {allAbouts.map((about) => (
        <AboutSection key={about.fileName} about={about} />
      ))}
    </main>
  );
}
