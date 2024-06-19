interface Sponsor {
  name: string;
  image: string;
  description: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

const sponsors: Sponsor[] = [
//   {
//     name: "Ajay Dhangar",
//     image: "/sponsors/ajay-dhangar.jpg",
//     description: "Full Stack Engineer",
//     github: "https://github.com/ajay-dhangar",
//     linkedin: "https://linkedin.com/in/ajay-dhangar",
//     twitter: "https://x.com/CodesWithAjay",
//     instagram: "https://www.instagram.com/_ajay.dhangar",
//   },

  {
    name: "Narendra Dhangar",
    image: "/sponsors/narendra-dhangar.jpg",
    description: "B.Tech (CSE) Student",
    github: "https://github.com/narendra-dhangar",
    linkedin: "https://www.linkedin.com/in/narendra-dhangar-7a32aa283/",
    instagram: "https://www.instagram.com/narendra_dh._05/",
  },
  {
    name: "MOHD ARIF",
    image: "https://github.com/mrmohdarif.png",
    description: "Software Engineer",
    github: "https://github.com/mrmohdarif",
    linkedin: "https://www.linkedin.com/in/mohd-arif-115b87231/",
  },
];

export default sponsors;
