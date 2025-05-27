import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "A Wallet for Everyone",
    Svg: require("@site/static/img/undraw_confirmed_c5lo.svg").default,
    description: (
      <>
        Sage is a wallet designed to make using the Chia blockchain and user
        facing apps on top of it easy.
      </>
    ),
  },
  {
    title: "Build on Chia",
    Svg: require("@site/static/img/undraw_creative-flow_t3kz.svg").default,
    description: (
      <>
        For more complex use cases, the Wallet SDK provides comprehensive tools
        for building on Chia.
      </>
    ),
  },
  {
    title: "Get Involved",
    Svg: require("@site/static/img/undraw_team-up_qeem.svg").default,
    description: (
      <>
        Every aspect of Sage and the Wallet SDK is open source. Feel free to
        reach out and get involved!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
