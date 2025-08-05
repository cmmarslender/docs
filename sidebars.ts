import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sidebar: [
    { type: "doc", id: "index" },
    { type: "doc", id: "files" },
    { type: "doc", id: "config" },
    {
      type: "category",
      label: "RPC",
      items: [
        { type: "doc", id: "rpc/setup" },
        { type: "doc", id: "rpc/types" },
        { type: "doc", id: "rpc/offers" },
      ],
    },
  ],
};

export default sidebars;
