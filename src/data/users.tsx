import {sortBy} from '../utils/jsUtils';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'nodejs'
  | 'mongodb'
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'i18n'
  | 'versioning'
  | 'large'
  | 'meta'
  | 'personal'
  | 'templates'
  | 'portfolio'
  | 'nextjs'
  | 'vanilla'
  | 'typescript'
  | 'clone';

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

export const Tags: {[type in TagType]: Tag} = {
  html: {
    label: 'HTML',
    description:
      '',
    color: '#f06529',
  },
  css: {
    label: 'CSS',
    description:
      '',
    color: '#2965f1',
  },
  javascript: {
    label: 'JavaScript',
    description:
      '',
    color: '#f0db4f',
  },
  vanilla: {
    label: 'Vanilla',
    description:
      '',
    color: '#f0db4f',
  },
  react: {
    label: 'React.js',
    description:
      '',
    color: '#61dafb',
  },
  nextjs: {
    label: 'Next.js',
    description:
      '',
    color: '#000000',
  },
  typescript: {
    label: 'TypeScript',
    description:
      '',
    color: '#007acc',
  },
  nodejs: {
    label: 'Node.js',
    description:
      '',
    color: '#026e00',
  }, 
  
  mongodb: {
    label: 'MongoDB',
    description:
      '',
    color: '#13aa52',
  },
  
  favorite: {
    label: 'Favorite',
    description:
      '',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open-Source',
    description:
      '',
    color: '#39ca30',
  },

  product: {
    label: 'Product',
    description: '',
    color: '#dfd545',
  },

  design: {
    label: 'Design',
    description:
      '',
    color: '#a44fb7',
  },

  i18n: {
    label: 'I18n',
    description:
      '',
    color: '#127f82',
  },

  versioning: {
    label: 'Versioning',
    description:
      '',
    color: '#fe6829',
  },

  large: {
    label: 'Large',
    description:
      '',
    color: '#8c2f00',
  },

  meta: {
    label: 'Meta',
    description: '',
    color: '#4267b2', 
  },

  personal: {
    label: 'Personal',
    description:
      '',
    color: '#14cfc3',
  },

  templates: {
    label: 'Templates',
    description:
      '',
    color: '#ffcfc3',
  },
  portfolio: {
    label: 'portfolio',
    description:
      '',
    color: '#ff4400',
  },

  clone: {
    label: 'Clone',
    description: '',
    color: '#004400',
  },
};

const Users: User[] = [

  {
    title: 'You Tube Clone',
    description: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5',
    preview: require('./showcase/YouTube-Clone.jpg'),
    website: 'https://my-youtube-ajay.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/youtube_clone',
    tags: ['opensource', 'clone', 'templates', 'react'],
  },  
  {
    title: 'Quiz App',
    description: 'Explore and test your knowledge with the Quiz app. Engaging quizzes to challenge your mind and expand your horizons. Try it now!',
    preview: require('./showcase/quiz-app.jpg'),
    website: 'https://quiz-app-ajay-dhangar.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/Quiz-app',
    tags: ['opensource', 'clone', 'templates'],
  },
  {
    title: 'Music App',
    description: 'Your music, your way. Explore and enjoy a world of tunes with our Spotify-inspired app. 🎶 ',
    preview: require('./showcase/music-app.jpg'),
    website: 'https://shivay-studio.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/music-app',
    tags: ['opensource', 'clone', 'templates'],
  }, 

  {
    title: 'TailwindBlog',
    description: 'The Starter app is a feature-rich Next.js and Tailwind CSS blogging starter template.',
    preview: require('./showcase/TailwindBlog.jpg'),
    website: 'https://starter-aj-zero-coding.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/starter',
    tags: ['opensource', 'clone', 'templates'],
  },

  {
    title: 'GERIGHT',
    description: 'Experience culinary excellence at Gericht Restaurant: Modern UI, showcasing The Key To Fine Dining.',
    preview: require('./showcase/gericht-restaurant-modern-ui.jpg'),
    website: 'https://ajay-1.vercel.app/',
    source: 'https://github.com/Ajay-Dhangar/gericht-restaurant-modern-ui',
    tags: ['opensource', 'templates', 'clone'],
  },
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();