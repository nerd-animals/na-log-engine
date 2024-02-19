export default function AboutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="about-content">
      <div className="about-description">{children}</div>
    </div>
  );
}
