export type TechTabKey = 'technical' | 'soft' | 'tools';

export type TechItem = {
  label: string;
  icon: string;
  highlighted?: boolean;
};

export type TechGroup = {
  title: string;
  icon: string;
  items: TechItem[];
};

export type TechTab = {
  key: TechTabKey;
  label: string;
  icon: string;
  groups: TechGroup[];
};

export const techStack: TechTab[] = [
  {
    key: 'technical',
    label: 'Technical',
    icon: '/src/assets/icons/code.svg',
    groups: [
      {
        title: 'Frontend',
        icon: '/src/assets/icons/frontend.svg',
        items: [
          { label: 'React', icon: '/src/assets/icons/react.svg' },
          { label: 'Next.js', icon: '/src/assets/icons/nextjs.svg' },
          { label: 'TypeScript', icon: '/src/assets/icons/typescript.svg' },
          { label: 'JavaScript', icon: '/src/assets/icons/javascript.svg' },
          { label: 'HTML5', icon: '/src/assets/icons/html.svg' },
          { label: 'CSS3', icon: '/src/assets/icons/css.svg' },
          { label: 'Tailwind CSS', icon: '/src/assets/icons/tailwind.svg' },
          { label: 'React Native', icon: '/src/assets/icons/react.svg' },
        ],
      },
      {
        title: 'Backend',
        icon: '/src/assets/icons/backend.svg',
        items: [
          { label: 'Node.js', icon: '/src/assets/icons/nodejs.svg' },
          { label: '.NET', icon: '/src/assets/icons/dotnet.svg' },
          { label: 'C#', icon: '/src/assets/icons/csharp.svg' },
          { label: 'REST APIs', icon: '/src/assets/icons/api.svg' },
          { label: 'Firebase', icon: '/src/assets/icons/firebase.svg' },
          { label: 'MongoDB', icon: '/src/assets/icons/mongodb.svg' },
          { label: 'AWS', icon: '/src/assets/icons/aws.svg' },
        ],
      },
      {
        title: 'Tools & Platforms',
        icon: '/src/assets/icons/tools.svg',
        items: [
          { label: 'Git', icon: '/src/assets/icons/git.svg' },
          { label: 'GitHub', icon: '/src/assets/icons/github.svg' },
          { label: 'Expo', icon: '/src/assets/icons/expo.svg' },
          { label: 'Figma', icon: '/src/assets/icons/figma.svg' },
          { label: 'Postman', icon: '/src/assets/icons/postman.svg' },
          { label: 'Vite', icon: '/src/assets/icons/vite.svg' },
          { label: 'Docker', icon: '/src/assets/icons/docker.svg' },
          { label: 'GIS', icon: '/src/assets/icons/gis.svg' },
        ],
      },
      {
        title: 'Learning & Growth',
        icon: '/src/assets/icons/brain.svg',
        items: [
          { label: 'ASP.NET Core', icon: '/src/assets/icons/dotnet.svg' },
          { label: 'SQLite', icon: '/src/assets/icons/database.svg' },
          { label: 'Architecture', icon: '/src/assets/icons/architecture.svg' },
          { label: 'Scalable UI', icon: '/src/assets/icons/ui.svg' },
        ],
      },
    ],
  },
  {
    key: 'soft',
    label: 'Soft Skills',
    icon: '/src/assets/icons/soft-skills.svg',
    groups: [
      {
        title: 'Professional Strengths',
        icon: '/src/assets/icons/soft-skills.svg',
        items: [
          {
            label: 'Problem Solving',
            icon: '/src/assets/icons/problem-solving.svg',
          },
          {
            label: 'Communication',
            icon: '/src/assets/icons/communication.svg',
          },
          { label: 'Teamwork', icon: '/src/assets/icons/teamwork.svg' },
          { label: 'Adaptability', icon: '/src/assets/icons/adaptability.svg' },
          {
            label: 'Responsibility',
            icon: '/src/assets/icons/responsibility.svg',
          },
          {
            label: 'Continuous Learning',
            icon: '/src/assets/icons/learning.svg',
          },
        ],
      },
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: '/src/assets/icons/tools.svg',
    groups: [
      {
        title: 'Everyday Workflow',
        icon: '/src/assets/icons/tools.svg',
        items: [
          { label: 'Git', icon: '/src/assets/icons/git.svg' },
          { label: 'GitHub', icon: '/src/assets/icons/github.svg' },
          { label: 'Figma', icon: '/src/assets/icons/figma.svg' },
          { label: 'Postman', icon: '/src/assets/icons/postman.svg' },
          { label: 'VS Code', icon: '/src/assets/icons/vscode.svg' },
          { label: 'Expo', icon: '/src/assets/icons/expo.svg' },
        ],
      },
    ],
  },
];
