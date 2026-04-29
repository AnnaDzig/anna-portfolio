import tandemImage from '../assets/projects/tandem.png';
import kazbooImage from '../assets/projects/kazboo.png';
import photographerPortfolioImage from '../assets/projects/photo-portfolio.png';
export const projects = [
  {
    title: 'Tandem Widget Trainer',
    description:
      'An interactive learning platform for JavaScript, TypeScript and Algorithms where users can study lessons, complete quizzes, and track their progress through a structured learning flow.',
    stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'Tailwind CSS'],
    link: 'https://dzzuze.github.io/SAA-Cat',
    image: tandemImage,
  },
  {
    title: 'KazbooApp',
    description:
      'A mobile social platform built with React Native and Expo, focused on real-world product functionality, backend integration, and practical problem-solving under technical constraints.',
    stack: ['React Native', 'Expo', 'TypeScript', 'REST API'],
    link: '#',
    image: kazbooImage,
  },
  {
    title: 'StopBlodning.dk',
    description:
      'A website project rebuilt with Next.js, focused on responsive layout, clean UI, and modern frontend structure while preserving the original design direction.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    image: '/assets/projects/stopblodning.png',
  },
  {
    title: 'Inventory System',
    description:
      'A full-stack ASP.NET Core MVC project for managing tools, warehouses, and users, built with a focus on clean architecture, authentication, and scalable structure.',
    stack: ['C#', '.NET', 'ASP.NET Core MVC', 'SQLite'],
    link: '#',
    image: '/assets/projects/inventory.png',
  },
  {
    title: 'Photographer Portfolio',
    description:
      'A modern and elegant photography portfolio website showcasing visual storytelling through curated galleries, video content, and a refined user experience. Designed to highlight artistic work while providing clear navigation, pricing information, and contact options.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://annadzig.github.io/Portfolio/portfolio/',
    image: photographerPortfolioImage,
  },
];
