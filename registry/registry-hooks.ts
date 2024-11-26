import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-media-query",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-media-query.ts",
        type: "registry:hook",
      },
    ],
  },
];
