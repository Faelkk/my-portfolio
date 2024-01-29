import { useQuery } from "@tanstack/react-query";

import { skillsService } from "../services/skillsService";
import { SkillFetch } from "../entities/Skill";

export function useSkills() {
  const { data, isFetching } = useQuery<SkillFetch | null>({
    queryKey: ["Skill"],
    queryFn: skillsService.getAll,
    staleTime: Infinity,
  });

  return { skills: data?.skills ?? [], isLoading: isFetching };
}
