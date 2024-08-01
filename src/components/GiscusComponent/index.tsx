import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import "./style.css";

/**
 * GiscusComponent
 * 
 * A React component that integrates Giscus for GitHub discussions.
 * 
 * @returns {JSX.Element} The rendered component
 */
export default function GiscusComponent() {
  const { colorMode } = useColorMode(); // Retrieves the current color mode from Docusaurus theme

  return (
    <div className="giscus-component">
      <Giscus
        id="giscus"
        repo="CodeHarborHub/codeharborhub.github.io"
        repoId="R_kgDOLiT30w"
        category="Support"
        categoryId="DIC_kwDOLiT3084CfRMi"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode} // Sets the theme based on the current color mode
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
