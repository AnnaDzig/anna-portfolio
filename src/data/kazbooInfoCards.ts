import type { ComponentType, SVGProps } from 'react';
import architectureDecisionsIcon from '../assets/icons/arcitecture&decisions.svg?react';
import qualityIcon from '../assets/icons/quality.svg?react';
import whatILearnedIcon from '../assets/icons/what-i-learned.svg?react';
import prodactionExperienceIcon from '../assets/icons/prodaction.svg?react';

export type KazbooInfoCard = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  paragraphs: string[];
};

export const kazbooInfoCards: KazbooInfoCard[] = [
  {
    title: 'Architecture & decisions',
    icon: architectureDecisionsIcon,
    paragraphs: [
      'The app used Expo Router for navigation and Redux Toolkit for global state management, primarily handling authentication, user profile data, and shared app state.',
      'While React Context was initially considered, Redux Toolkit was chosen due to the growing complexity of shared state across multiple screens. It provided better structure, scalability, and improved debugging with Redux DevTools.',
      'Authentication tokens were securely stored using expo-secure-store, ensuring proper session persistence and secure handling of user data.',
    ],
  },
  {
    title: 'Production experience',
    icon: prodactionExperienceIcon,
    paragraphs: [
      'I worked on resolving cross-platform issues between iOS and Android, particularly related to layout behavior, SafeArea handling, and responsive design.',
      'Using NativeWind, I adjusted layout structures and styling logic to ensure consistent UI across devices. These improvements significantly enhanced the overall user experience.',
    ],
  },
  {
    title: 'Code quality',
    icon: qualityIcon,
    paragraphs: [
      'As the application evolved, I refactored larger components into smaller, reusable ones to improve maintainability and readability.',
      'We followed a clear separation between local UI state and global state in Redux, which helped reduce unnecessary re-renders and kept the architecture clean.',
      'TypeScript ensured strong type safety across API interactions, and Jest was used for testing.',
    ],
  },
  {
    title: 'What I learned',
    icon: whatILearnedIcon,
    paragraphs: [
      'This project gave me real production experience, working not only on features, but also on maintaining and scaling an application used by real users.',
      'I strengthened my skills in handling async flows, debugging complex state issues, and building reliable cross-platform mobile applications.',
      'Most importantly, I learned to think beyond implementation, focusing on structure, maintainability, and long-term scalability.',
    ],
  },
];
