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
    {
        name: 'Ajay Dhangar',
        image: '/sponsors/ajay-dhangar.jpg',
        description: 'Full Stack Engineer',
        github: 'https://github.com/ajay-dhangar',
        linkedin: 'https://linkedin.com/in/ajay-dhangar',
        twitter: 'https://x.com/CodesWithAjay',
        instagram: 'https://www.instagram.com/_ajay.dhangar'
    },
];

export default sponsors;