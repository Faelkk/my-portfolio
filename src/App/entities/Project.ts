export interface ProjectFetch {
  projects: Project[];
}

export interface Project {
  id?: string;
  name?: string;
  url?: string;
  urlGithub?: string;
  description?: string;
  technologies?: Technology[];
  cardimage: string;
  defaultimage: string;
}
export interface Technology {
  name: string;
  url: string;
}
