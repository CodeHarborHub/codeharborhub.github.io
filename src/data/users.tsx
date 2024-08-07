import { sortBy } from "../utils/jsUtils";
import { Users } from "./userData";
export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "nodejs"
  | "mongodb"
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "i18n"
  | "versioning"
  | "large"
  | "meta"
  | "personal"
  | "templates"
  | "portfolio"
  | "nextjs"
  | "vanilla"
  | "typescript"
  | "ai"
  | "ml"
  | "mdx"
  | "game"
  | "scss"
  | "php"
  | "documentation"
  | "gym"
  | "motion"
  | "redux"
  | "tailwind"
  | "clone";

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string | null;
  source: string | null;
  tags: TagType[];
};

export const Tags: { [type in TagType]: Tag } = {
  html: {
    label: "HTML",
    description: "",
    color: "#f06529",
  },
  css: {
    label: "CSS",
    description: "",
    color: "#2965f1",
  },
  javascript: {
    label: "JavaScript",
    description: "",
    color: "#f0db4f",
  },
  vanilla: {
    label: "Vanilla",
    description: "",
    color: "#f0db4f",
  },
  react: {
    label: "React.js",
    description: "",
    color: "#61dafb",
  },
  nextjs: {
    label: "Next.js",
    description: "",
    color: "#000000",
  },
  typescript: {
    label: "TypeScript",
    description: "",
    color: "#007acc",
  },
  nodejs: {
    label: "Node.js",
    description: "",
    color: "#026e00",
  },

  mongodb: {
    label: "MongoDB",
    description: "",
    color: "#13aa52",
  },

  favorite: {
    label: "Favorite",
    description: "",
    color: "#f06529",
  },
  opensource: {
    label: "Open-Source",
    description: "",
    color: "#39ca30",
  },

  product: {
    label: "Product",
    description: "",
    color: "#dfd545",
  },

  design: {
    label: "Design",
    description: "",
    color: "#a44fb7",
  },

  i18n: {
    label: "I18n",
    description: "",
    color: "#127f82",
  },

  versioning: {
    label: "Versioning",
    description: "",
    color: "#fe6829",
  },

  large: {
    label: "Large",
    description: "",
    color: "#8c2f00",
  },

  motion: {
    label: "Motion",
    description: "",
    color: "#f06529",
  },

  redux: {
    label: "Redux",
    description: "",
    color: "#764abc",
  },

  meta: {
    label: "Meta",
    description: "",
    color: "#4267b2",
  },

  php: {
    label: "PHP",
    description: "",
    color: "#8892be",
  },

  personal: {
    label: "Personal",
    description: "",
    color: "#14cfc3",
  },

  templates: {
    label: "Templates",
    description: "",
    color: "#ffcfc3",
  },
  portfolio: {
    label: "portfolio",
    description: "",
    color: "#ff4400",
  },

  clone: {
    label: "Clone",
    description: "",
    color: "#004400",
  },

  ai: {
    label: "AI",
    description: "",
    color: "#007acc",
  },

  documentation:
  {
    label: "Documentation",
    description: "",
    color: "#007acc",
  },
  game: {
    label: "Game",
    description: "",
    color: "#555555",
  },
  ml: {
    label: "ML",
    description: "",
    color: "#007acc",
  },
  gym: {
    label: "Gym",
    description: "",
    color: "#FF5733",
  },
  mdx: {
    label: "MDX",
    description: "",
    color: "#007acc",
  },
  tailwind: {
    label: "Tailwind",
    description: "",
    color: "#007acc",
  },
  scss: {
    label: "SCSS",
    description: "",
    color: "#007acc",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  result = sortBy(result, (user) => user.title.toLowerCase());
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
