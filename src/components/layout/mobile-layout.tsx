export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-sm mx-auto h-svh overflow-y-auto bg-white no-scrollbar">
      {children}
    </div>
  );
}
