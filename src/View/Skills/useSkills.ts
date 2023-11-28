import { useState, useEffect } from "react";

interface useSkilsProps {
  setStatus: (skillName: string) => void;
  status: {
    isHovered: boolean;
  };
}

export const useSkills = ({ setStatus, status }: useSkilsProps) => {
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
    shouldAnimate,
    handleIconClick,
  };
};
