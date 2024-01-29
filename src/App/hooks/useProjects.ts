import { useQuery } from "@tanstack/react-query";

import { projectsService } from "../services/projectsService";
import { ProjectFetch } from "../entities/Project";

export function useProjects() {
  const { data, isFetching } = useQuery<ProjectFetch | null>({
    queryKey: ["Projects"],
    queryFn: projectsService.getAll,
    staleTime: Infinity,
  });

  return { projects: data?.projects ?? [], isLoading: isFetching };
}
