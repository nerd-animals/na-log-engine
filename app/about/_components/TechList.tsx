export default function TechList({ techList }: { techList: string[] }) {
  return (
    <div className="about-tech-list">
      {techList.map((tech) => (
        <div className="about-tech">{tech}</div>
      ))}
    </div>
  );
}
