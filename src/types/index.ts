export interface Project {
  id: string;
  title: string;
  category: 'ai-ml' | 'web-dev' | 'research';
  description: string;
  fullDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'internship' | 'project' | 'research';
}
