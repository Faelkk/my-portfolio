import { useState, useEffect } from "react";
import { useSkills } from "../../App/hooks/useSkill";

interface useSkilsProps {
  setStatus: (skillName: string) => void;
  status: {
    isHovered: boolean;
  };
}

export const useSkillsController = ({ setStatus, status }: useSkilsProps) => {
  const { skills, isLoading } = useSkills();

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (status.isHovered) {
      setShouldAnimate(true);
    }
  }, [status.isHovered, shouldAnimate]);

  const handleIconClick = (skillName: string) => {
    setShouldAnimate(false);

    setTimeout(() => {
      setShouldAnimate(true);
    }, 10);

    setStatus(skillName);
  };

  return {
    skills,
    isLoading,
    shouldAnimate,
    handleIconClick,
  };
};
