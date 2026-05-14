import tandemImage from '../assets/projects/tandem.png';
import kazbooImage from '../assets/projects/kazboo.png';
import photographerPortfolioImage from '../assets/projects/photo-portfolio.png';
import stopbleedingImage from '../assets/projects/stop-bleeding.png';
import followTheMoneyImage from '../assets/projects/crypto-graph.png';
import professionalPortfolioImage from '../assets/projects/professional-portfolio.png';
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
    link: 'projects/kazboo',
    image: kazbooImage,
  },
  {
    title: 'StopBleeding.dk',
    description:
      'A website project rebuilt with Next.js, focused on responsive layout, clean UI, and modern frontend structure while preserving the original design direction.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://stop-bleeding-kxnhttmml-annadzigs-projects.vercel.app/',
    image: stopbleedingImage,
  },
  {
    title: 'Professional Photographer',
    description:
      'A responsive photography portfolio website built with HTML, CSS, and JavaScript. The project presents a modern visual layout with a hero section, about section, animated portfolio gallery, pricing cards, FAQ section, and contact form. It focuses on clean structure, smooth interactions, and an elegant editorial-style design for showcasing photography work.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://annadzig.github.io/Portfolio/portfolio/',
    image: photographerPortfolioImage,
  },
  {
    title: 'Follow the Money',
    description:
      'Follow the Money is a React and TypeScript graph visualization demo inspired by crypto investigation workflows. It shows wallets, clusters, mixers, services, and exchanges as an interactive transaction graph, with clickable nodes, risk indicators, entity details, and transaction paths.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Cytoscape.js',
      'Tailwind CSS',
      'React Cytoscape.js',
    ],
    link: 'https://annadzig.github.io/Follow-the-Money/',
    image: followTheMoneyImage,
  },
  {
    title: 'Photographer Portfolio',
    description:
      'A modern and elegant photography portfolio website showcasing visual storytelling through curated galleries, video content, and a refined user experience. Designed to highlight artistic work while providing clear navigation, pricing information, and contact options.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://annadzig.github.io/Photographer-portfolio/',
    image: professionalPortfolioImage,
  },
  {
    title: 'Inventory System',
    description:
      'A full-stack ASP.NET Core MVC project for managing tools, warehouses, and users, built with a focus on clean architecture, authentication, and scalable structure.',
    stack: ['C#', '.NET', 'ASP.NET Core MVC', 'SQLite'],
    link: '#',
    image: '/assets/projects/inventory.png',
  },
];
