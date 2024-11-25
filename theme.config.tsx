import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/celeroncoder/shadcn-registry",
  },
  docsRepositoryBase: "https://github.com/shadcn-registry/blob/main",
  logo: <span>🧱 celeroncoder's components</span>,
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://celeroncoder.com" target="_blank">
          celeroncoder
        </a>
        .
      </span>
    ),
  },
  color: {
    hue: 75,
    saturation: 75,
    lightness: 50,
  },
  navigation: false,
  toc: {
    float: true,
  },
  faviconGlyph: "🧱",
  darkMode: true,
};

export default config;
