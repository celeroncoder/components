import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "select-with-search",
    description: "A select component with search functionality. (Responsive)",
    type: "registry:ui",
    registryDependencies: ["button", "command", "popover"],
    files: ["ui/select-with-search.tsx"],
  },
];
