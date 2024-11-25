export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-inherit border-2 border-current/50 rounded">
      {children}
    </div>
  );
}
