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
        repo="ajay-dhangar/code-harbor-hub"
        repoId="R_kgDOLNryZQ"
        category="General"
        categoryId="DIC_kwDOLNryZc4Cc7ll"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="bottom"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
