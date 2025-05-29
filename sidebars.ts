import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sageSidebar: [
    { type: "doc", id: "sage/index" },
    { type: "doc", id: "sage/directory" },
    {
      type: "category",
      label: "RPC API",
      link: {
        type: "generated-index",
        description:
          "Explore the API provided by the Sage RPC, as well as instructions on how to set it up.",
      },
      items: ["sage/rpc/index"],
    },
  ],
  sdkSidebar: ["sdk/index"],
};

export default sidebars;
