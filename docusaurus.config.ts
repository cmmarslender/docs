import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "xch.dev",
  tagline: "Build our decentralized future on the Chia blockchain",
  favicon: "img/favicon.ico",
  url: "https://xch.dev",
  baseUrl: "/",
  organizationName: "xch-dev",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: "xch.dev",
      logo: {
        alt: "xch.dev Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/xch-dev/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Chia Docs",
              href: "https://docs.chia.net",
            },
            {
              label: "Chialisp Docs",
              href: "https://chialisp.com",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/sagewallet",
            },
            {
              label: "X",
              href: "https://x.com/sage_wallet",
            },
          ],
        },
        {
          title: "Contribute",
          items: [
            {
              label: "Wallet SDK",
              href: "https://github.com/xch-dev/chia-wallet-sdk",
            },
            {
              label: "Sage",
              href: "https://github.com/xch-dev/sage",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rigid Network LLC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["toml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
