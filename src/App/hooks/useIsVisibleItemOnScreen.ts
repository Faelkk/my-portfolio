import { useEffect, useState, useRef } from "react";

export function useIsVisibleItemOnScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null); 

  const handleScroll = () => {
    checkVisibility(); 
  };

  const checkVisibility = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    checkVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return { isVisible, elementRef };
}
