import React from "react";

import type { Props as Tweet } from "../components/Tweet";

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: "https://x.com/CodesWithAjay/status/1795486727077007869",
    handle: "TechLover99",
    name: "TechLover99",
    date: "May 28, 2024",
    content: (
      <>
        Just completed my first JavaScript course on @CodeHarborHub! The content
        is top-notch and completely free. Highly recommend it! #LearnToCode
        #FreeEducation
      </>
    ),
    showOnHomepage: true,
    githubUsername: "TechLover99",
  },
  {
    url: "https://x.com/CodesWithAjay/status/1795486727077007869",
    handle: "DevNewbie",
    name: "DevNewbie",
    date: "May 28, 2024",
    content: (
      <>
        Can&apos;t believe how much I&apos;ve learned from @CodeHarborHub in
        just a few weeks. Their hands-on projects are amazing! #WebDevelopment
        #CodeHarborHub
      </>
    ),
    showOnHomepage: true,
    githubUsername: "DevNewbie",
  },
  {
    url: "https://x.com/CodesWithAjay/status/1795486727077007869",
    handle: "DataScienceGeek",
    name: "DataScienceGeek",
    date: "May 28, 2024",
    content: (
      <>
        Loving the data science courses on @CodeHarborHub. It&apos;s all free
        and ad-free. Perfect for anyone looking to upskill. #DataScience
        #FreeLearning
      </>
    ),
    showOnHomepage: true,
    githubUsername: "DataScienceGeek",
  },
  {
    url: "https://x.com/CodesWithAjay/status/1795486727077007869",
    handle: "CoderGirl",
    name: "CoderGirl",
    date: "May 28, 2024",
    content: (
      <>
        Joined @CodeHarborHub last month and already feel more confident in my
        coding skills. Great community and resources! #TechCommunity
        #WomenInTech
      </>
    ),
    showOnHomepage: true,
    githubUsername: "CoderGirl",
  },
  {
    url: "https://x.com/CodesWithAjay/status/1795486727077007869",
    handle: "FutureDev",
    name: "FutureDev",
    date: "May 28, 2024",
    content: (
      <>
        Shoutout to @CodeHarborHub for providing such quality education for
        free! Their courses have been a game-changer for me. #TechSkills
        #CareerGrowth
      </>
    ),
    showOnHomepage: true,
    githubUsername: "FutureDev",
  },
  {
    url: "https://x.com/CodesWithAjay/status/1795486727077007869",
    handle: "CodeMaster",
    name: "CodeMaster",
    date: "May 28, 2024",
    content: (
      <>
        Just finished the Python course on @CodeHarborHub. The explanations were
        clear and easy to follow. Ideal for beginners! #Python #CodeHarborHub
      </>
    ),
    showOnHomepage: true,
    githubUsername: "CodeMaster",
  },
  {
    url: "/",
    handle: "...",
    name: "Samar Jeet Yadav",
    date: "Jun 21, 2024",
    content: (
      <>
        I want to promote this type of amazing learning source. Because this is
        totally open resource anyone can easily go on website and learn a lot
        different types of course form zero to advance level...
      </>
    ),
    showOnHomepage: true,
    githubUsername: "",
  },
  {
    url: "/",
    handle: "AI_Enthusiast",
    name: "AI_Enthusiast",
    date: "May 28, 2024",
    content: (
      <>
        If you&apos;re looking to learn AI and machine learning, @CodeHarborHub
        is the place to be. Comprehensive and free! #MachineLearning #AI
        #CodeHarborHub
      </>
    ),
    showOnHomepage: true,
    githubUsername: "AI_Enthusiast",
  },
];

export default TWEETS;
