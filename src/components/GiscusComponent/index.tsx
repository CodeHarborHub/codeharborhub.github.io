import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import "./style.css";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <div className="giscus-component">
      <Giscus
        id="giscus"
        repo="codeharborhub/codeharborhub"
        repoId="R_kgDOLiT30w"
        category="Support"
        categoryId="DIC_kwDOLiT3084CfRMi"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
