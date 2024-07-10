import React, { useState, useMemo, useEffect } from "react";
import BlogPage from "../../components/Blog/BlogPage";
import Layout from "@theme/Layout";
import clsx from "clsx";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Translate, { translate } from "@docusaurus/Translate";
import { useHistory, useLocation } from "@docusaurus/router";
import { usePluralForm } from "@docusaurus/theme-common";
import { motion } from "framer-motion";
import styles from "../showcase/styles.module.css";

const TITLE =
  "CodeHarborHub Blogs";
const DESCRIPTION =
  "Discover insights, tips, and trends on Code Harbor Hub's Blog - where innovation meets expertise";
const EDIT_URL = "https://github.com/codeharborhub/codeharborhub";

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}


function BlogsHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <motion.h1
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className={styles.TitleText}
      >
        {TITLE}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.3,
        }}
      >
        {DESCRIPTION}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
      >
        <a
          className="button button--primary"
          href={EDIT_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Translate id="showcase.header.button">
            🌟 Join the CodeHarbarHub Community
          </Translate>
        </a>
      </motion.div>
    </section>
  );
}

export default function Blog(): JSX.Element {
  return (
    <main>
      <Layout
      >
        <BlogsHeader />
        <BlogPage />
      </Layout>
    </main>
  );
}
