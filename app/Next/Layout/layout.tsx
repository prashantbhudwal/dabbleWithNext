export default function LevelOne({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-full flex-1 flex-col rounded p-6 ring ring-emerald-500">
      {children}
      <div className="mt-auto">Layout: Level One</div>
    </div>
  );
}
