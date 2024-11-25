import "@/styles/preview.module.css";

export function Preview({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
