import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "select-with-search",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "command", "popover"],
    files: ["ui/select-with-search.tsx"],
  },
];
