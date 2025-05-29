import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sageSidebar: [
    { type: "doc", id: "sage/index" },
    { type: "doc", id: "sage/files" },
    { type: "doc", id: "sage/config" },
    { type: "doc", id: "sage/rpc" },
  ],
  sdkSidebar: ["sdk/index"],
};

export default sidebars;
