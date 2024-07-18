interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    slug: string;
  }
  
  const blogs: Blog[] = [
    {
      id: 1,
      title: 'Getting started with Microservices',
      image: '/assets/images/image01-736d71e3db56657987594b3b11459b5d.png',
      description: 'Microservices are an architectural style that structures an application as a collection of small, loosely coupled services.',
      slug: 'getting-started-with-microservices'
    },
    {
      id: 2,
      title: 'Cryptography and Its Use in Cyber Security',
      image: '/img/blogs/introduction-to-cryptography-and-cyber-security.jpg',
      description: 'In the realm of cyber security, cryptography stands as a critical tool for protecting information.',
      slug: 'introduction-to-cryptography-and-cyber-security'
    },
    {
      id: 3,
      title: 'Blog 3 Title',
      image: '/img/svg/blogging.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      slug: '#'
    },
    {
      id: 4,
      title: 'Blog 4 Title',
      image: '/img/svg/blogging.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      slug: '#'
    },
    {
      id: 5,
      title: 'Blog 5 Title',
      image: '/img/svg/blogging.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      slug: '#'
    },
    {
      id: 6,
      title: 'Blog 6 Title',
      image: '/img/svg/blogging.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
      slug: '#'
    }
  ];
  
  export default blogs;