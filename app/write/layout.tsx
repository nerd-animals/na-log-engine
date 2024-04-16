export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="write-page-wrapper">
      <main className="write-wrapper">{children}</main>
    </div>
  );
}
