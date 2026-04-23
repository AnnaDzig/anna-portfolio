import type { ComponentType, SVGProps } from 'react';

import CodeIcon from '../assets/icons/code.svg?react';
import FrontendIcon from '../assets/icons/frontend.svg?react';
import BackendIcon from '../assets/icons/backend.svg?react';
import ToolsIcon from '../assets/icons/tools.svg?react';
import BrainIcon from '../assets/icons/brain.svg?react';
import SoftSkillsIcon from '../assets/icons/soft-skills.svg?react';

import ReactIcon from '../assets/icons/react.svg?react';
import NextjsIcon from '../assets/icons/nextjs.svg?react';
import TypeScriptIcon from '../assets/icons/typescript.svg?react';
import JavaScriptIcon from '../assets/icons/javascript.svg?react';
import HtmlIcon from '../assets/icons/html.svg?react';
import CssIcon from '../assets/icons/css.svg?react';
import TailwindIcon from '../assets/icons/tailwind.svg?react';
import NodejsIcon from '../assets/icons/nodejs.svg?react';
import DotnetIcon from '../assets/icons/dotnet.svg?react';
import CsharpIcon from '../assets/icons/csharp.svg?react';
import ApiIcon from '../assets/icons/api.svg?react';
import FirebaseIcon from '../assets/icons/firebase.svg?react';
import MongodbIcon from '../assets/icons/mongodb.svg?react';
import AwsIcon from '../assets/icons/aws.svg?react';
import GitIcon from '../assets/icons/git.svg?react';
import GithubIcon from '../assets/icons/github.svg?react';
import ExpoIcon from '../assets/icons/expo.svg?react';
import FigmaIcon from '../assets/icons/figma.svg?react';
import PostmanIcon from '../assets/icons/postman.svg?react';
import ViteIcon from '../assets/icons/vite.svg?react';
import DockerIcon from '../assets/icons/docker.svg?react';
import GisIcon from '../assets/icons/gis.svg?react';
import DatabaseIcon from '../assets/icons/database.svg?react';
import ArchitectureIcon from '../assets/icons/architecture.svg?react';
import UiIcon from '../assets/icons/ui.svg?react';
import ProblemSolvingIcon from '../assets/icons/problem-solving.svg?react';
import CommunicationIcon from '../assets/icons/communication.svg?react';
import TeamworkIcon from '../assets/icons/teamwork.svg?react';
import AdaptabilityIcon from '../assets/icons/adaptability.svg?react';
import ResponsibilityIcon from '../assets/icons/responsibility.svg?react';
import LearningIcon from '../assets/icons/learning.svg?react';
import VscodeIcon from '../assets/icons/vscode.svg?react';
import MySQLIcon from '../assets/icons/mysql.svg?react';

export type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type TechTabKey = 'technical' | 'soft' | 'tools';

export type TechItem = {
  label: string;
  icon: SkillIcon;
  highlighted?: boolean;
};

export type TechGroup = {
  title: string;
  icon: SkillIcon;
  items: TechItem[];
};

export type TechTab = {
  key: TechTabKey;
  label: string;
  icon: SkillIcon;
  groups: TechGroup[];
};

export const techStack: TechTab[] = [
  {
    key: 'technical',
    label: 'Technical',
    icon: CodeIcon,
    groups: [
      {
        title: 'Frontend',
        icon: FrontendIcon,
        items: [
          { label: 'React', icon: ReactIcon },
          { label: 'Next.js', icon: NextjsIcon },
          { label: 'TypeScript', icon: TypeScriptIcon },
          { label: 'JavaScript', icon: JavaScriptIcon },
          { label: 'HTML5', icon: HtmlIcon },
          { label: 'CSS3', icon: CssIcon },
          { label: 'Tailwind CSS', icon: TailwindIcon, highlighted: true },
          { label: 'React Native', icon: ReactIcon },
        ],
      },
      {
        title: 'Backend',
        icon: BackendIcon,
        items: [
          { label: 'Node.js', icon: NodejsIcon },
          { label: '.NET', icon: DotnetIcon },
          { label: 'C#', icon: CsharpIcon },
          { label: 'REST APIs', icon: ApiIcon },
          { label: 'Firebase', icon: FirebaseIcon },
          { label: 'MongoDB', icon: MongodbIcon },
          { label: 'AWS', icon: AwsIcon },
          { label: 'MySQL', icon: MySQLIcon },
        ],
      },
      {
        title: 'Tools & Platforms',
        icon: ToolsIcon,
        items: [
          { label: 'Git', icon: GitIcon },
          { label: 'GitHub', icon: GithubIcon },
          { label: 'Expo', icon: ExpoIcon },
          { label: 'Figma', icon: FigmaIcon },
          { label: 'Postman', icon: PostmanIcon },
          { label: 'Vite', icon: ViteIcon },
          { label: 'Docker', icon: DockerIcon },
          { label: 'GIS', icon: GisIcon },
        ],
      },
      {
        title: 'Learning & Growth',
        icon: BrainIcon,
        items: [
          { label: 'ASP.NET Core', icon: DotnetIcon },
          { label: 'SQLite', icon: DatabaseIcon },
          { label: 'Architecture', icon: ArchitectureIcon },
          { label: 'Scalable UI', icon: UiIcon },
        ],
      },
    ],
  },
  {
    key: 'soft',
    label: 'Soft Skills',
    icon: SoftSkillsIcon,
    groups: [
      {
        title: 'Professional Strengths',
        icon: SoftSkillsIcon,
        items: [
          { label: 'Problem Solving', icon: ProblemSolvingIcon },
          { label: 'Communication', icon: CommunicationIcon },
          { label: 'Teamwork', icon: TeamworkIcon },
          { label: 'Adaptability', icon: AdaptabilityIcon },
          { label: 'Responsibility', icon: ResponsibilityIcon },
          { label: 'Continuous Learning', icon: LearningIcon },
        ],
      },
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: ToolsIcon,
    groups: [
      {
        title: 'Everyday Workflow',
        icon: ToolsIcon,
        items: [
          { label: 'Git', icon: GitIcon },
          { label: 'GitHub', icon: GithubIcon },
          { label: 'Figma', icon: FigmaIcon },
          { label: 'Postman', icon: PostmanIcon },
          { label: 'VS Code', icon: VscodeIcon },
          { label: 'Expo', icon: ExpoIcon },
        ],
      },
    ],
  },
];
