import type { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://components.celeroncoder.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={
            `${frontMatter.title} | celeroncoder's components` ||
            "celeroncoder's components"
          }
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Collection of shadcn-ui/cli compatible components dump thing"
          }
        />
        <title>{frontMatter.title || "celeroncoder's components"}</title>
      </>
    );
  },
  project: {
    link: "https://github.com/celeroncoder/components/",
  },
  docsRepositoryBase: "https://github.com/celeroncoder/components/tree/main",
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
