interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Ajay Dhangar",
    title: "CEO & Founder",
    bio: "Ajay is a full-stack web developer and the founder of the community. He loves to teach and help others learn web development. Ajay is also a mentor and a consultant for startups in the tech industry. He loves teaching web development and has a passion for building beautiful web applications. Ajay has over 10 years of experience in web development and has worked with several startups and established companies. He is also a mentor and a public speaker.",
    imageUrl: "/code-harbor-hub/instructors/ajay-dhangar.jpg",
  },

  {
    id: 2,
    name: "Shivay",
    title: "Software Engineer",
    bio: "Shivay is a software engineer and a full-stack web developer. He has a passion for teaching and helping others learn web development. Shivay has over 5 years of experience in web development and has worked with several startups and established companies. He is also a mentor and a public speaker.",
    imageUrl: "/code-harbor-hub/instructors/shivay.jpg",
  },
];
