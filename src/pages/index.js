// import clsx from "clsx";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import OurInstructors from "@site/src/components/OurInstructors";
// import GiscusComponent from "@site/src/components/GiscusComponent";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Hero from "../components/HomePage/Hero";
import Features from "../components/HomePage/Features";
import Courses from "../components/HomePage/Courses";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}          
//           Code Harbor Hub
//           <p className="hero__subtitle">{siteConfig.tagline}</p>
//         </Heading>
//         <div className={styles.buttons}>
//           <Link className="button button--secondary button--lg" to="/docs">
//             Documentation - Get Started
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

const featuresData = [
  {
    icon: "/img/svg/blogging.svg",
    title: "Blog Posts",
    description: "Read the latest blog posts shared by the CodeHarborHub.",
  },
  {
    icon: "/img/svg/browsing.svg",
    title: "Browse Courses",
    description:
      "Browse through the courses and tutorials shared by the CodeHarborHub.",
  },
  {
    icon: "/img/svg/building.svg",
    title: "Contribute To projects",
    description:
      "Contribute to open source projects and learn from the CodeHarborHub.",
  },
  {
    icon: "/img/svg/coding.svg",
    title: "Code Snippets",
    description: "Find and share code snippets with the CodeHarborHub.",
  },
];

const coursesData = [
  {
    title: "HTML & CSS",
    description:
      "Learn the basics of HTML and CSS. Start building your first website.",
    imageUrl: "/img/svg/static_website.svg",
  },
  {
    title: "JavaScript",
    description:
      "Learn the basics of JavaScript. Start building interactive websites.",
    imageUrl: "/img/svg/static_assets.svg",
  },
  {
    title: "React",
    description:
      "Learn the basics of React. Start building your first React app.",
    imageUrl: "/img/svg/react.svg",
  },
  {
    title: "Node.js",
    description:
      "Learn the basics of Node.js. Start building your first Node.js app.",
    imageUrl: "/img/svg/youtube_tutorial.svg",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();    
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
    >
      {/* <HomepageHeader /> */}

      <main>
        <Hero
          title="CodeHarborHub is"
          description="Your gateway to top-notch tech education. We're dedicated to empowering individuals with the skills to thrive in today's tech landscape. Whether you're a novice or a seasoned developer, our inclusive platform offers tailored learning opportunities. Join us today and embark on your path to tech mastery!"
          imageUrl="/img/svg/blogging.svg"
        />

        <hr style={{ margin: "1rem" }} />

        <div className={styles.home__divider}>
          <Heading as="h2">Features of CodeHarborHub</Heading>
        </div>

        <Features features={featuresData} />

        <div className={styles.home__divider}>
          <Heading as="h2">Courses Available</Heading>
        </div>

        <Courses courses={coursesData} />
      
      {/* 
        <div className={styles.home__divider}>
          <Heading as="h2">Join the Discussion</Heading>
        </div> */}
        
        {/* <div>
          <GiscusComponent />
        </div> */}
      </main>
    </Layout>
  );
}
