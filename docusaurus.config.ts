import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "xch.dev",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
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
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "xch.dev",
      logo: {
        alt: "xch.dev Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
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
          title: "Wallet SDK",
          items: [
            {
              label: "Docs",
              href: "/docs/intro",
            },
            {
              label: "GitHub",
              href: "https://github.com/xch-dev/chia-wallet-sdk",
            },
          ],
        },
        {
          title: "Sage",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/sagewallet",
            },
            {
              label: "X",
              href: "https://x.com/sage_wallet",
            },
            {
              label: "GitHub",
              href: "https://github.com/xch-dev/sage",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Docs Repo",
              href: "https://github.com/xch-dev/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rigid Network LLC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
