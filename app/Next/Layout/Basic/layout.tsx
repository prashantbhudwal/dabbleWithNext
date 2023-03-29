export default function LevelTwo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-full flex-1 flex-col rounded p-4 ring ring-fuchsia-500">
      {children}
      <div className="mt-auto">Layout: Level Two</div>
    </div>
  );
}
