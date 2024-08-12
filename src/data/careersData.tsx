export interface CareerCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    duration: string;
    location: string;
    category: string;
    tags: string[];
  }

  const careersData: CareerCardProps[] = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Develop software applications, build web apps, and work on exciting projects. Join our engineering team.",
      image: "/img/careers/software-engineer.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Engineering",
      tags: ["javascript", "react", "nodejs"],
    },
    {
      id: 2,
      title: "Data Scientist",
      description:
        "Analyze data, build models, and make data-driven decisions. Join our data science team.",
      image: "/img/careers/data-scientist.jpg",
      link: "#",
      duration: "Contract",
      location: "India",
      category: "Data Science",
      tags: ["python", "machine learning", "data analysis"],
    },
    {
      id: 3,
      title: "Project Manager",
      description:
        "Oversee projects, coordinate teams, set milestones, community engagement and more.",
      image: "/img/careers/project-manager.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Management",
      tags: ["project management", "team coordination", "community engagement"],
    },
    {
      id: 4,
      title: "Technical Lead",
      description:
        "Lead a team of developers, set technical direction, and work on challenging projects.",
      image: "/img/careers/technical-lead.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Engineering",
      tags: ["javascript", "react", "nodejs"],
    },
    {
      id: 5,
      title: "Frontend Developer",
      description:
        "Build user interfaces, work on web apps, and create engaging experiences.",
      image: "/img/careers/frontend-developer.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Engineering",
      tags: ["html", "css", "javascript", "react"],
    },
    {
      id: 6,
      title: "Backend Developers",
      description:
        "Build server-side applications, work with databases, and optimize performance.",
      image: "/img/careers/backend-developers.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Engineering",
      tags: ["nodejs", "express", "mongodb"],
    },
    {
      id: 7,
      title: "UI/UX Designers",
      description:
        "Design user interfaces, create wireframes, and work on user experience.",
      image: "/img/careers/ux-ui-designers.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Design",
      tags: ["ui/ux design", "wireframes", "user experience"],
    },
    {
      id: 8,
      title: "Editors/Reviewers",
      description:
        "Review content, edit articles, and ensure quality standards are met.",
      image: "/img/careers/editors-reviewers.jpg",
      link: "#",
      duration: "Part-time",
      location: "India",
      category: "Content",
      tags: ["editing", "reviewing", "content"],
    },
    {
      id: 9,
      title: "Community Manager",
      description:
        "Engage with the community, manage social media, and build relationships.",
      image: "/img/careers/community-manager.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Community",
      tags: ["community engagement", "social media", "relationships"],
    },
    {
      id: 10,
      title: "Marketing Specialist",
      description:
        "Create marketing campaigns, analyze data, and drive growth.",
      image: "/img/careers/marketing-specialist.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Marketing",
      tags: ["marketing campaigns", "data analysis", "growth"],
    },
    {
      id: 11,
      title: "QA Testers",
      description:
        "Test software applications, report bugs, and ensure quality standards. Join our QA team.",
      image: "/img/careers/qa-testers.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Quality Assurance",
      tags: ["testing", "bug reporting", "quality assurance"],
    },
    {
      id: 12,
      title: "DevOps Engineer",
      description:
        "Automate deployments, manage infrastructure, and optimize performance. Join our DevOps team.",
      image: "/img/careers/devops-engineer.jpg",
      link: "#",
      duration: "Full-time",
      location: "India",
      category: "Engineering",
      tags: ["devops", "automation", "infrastructure"],
    },
  ];

  export default careersData;
