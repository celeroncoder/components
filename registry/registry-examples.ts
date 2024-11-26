import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "select-with-search-demo",
    type: "registry:example",
    registryDependencies: ["select-with-search"],
    files: ["example/select-with-search-demo.tsx"],
  },
];
