import React, { useEffect, useRef } from "react";

type AnimateUiProps = {
  children: React.ReactNode;
  projects: readonly string[];
};

const AnimateUi = ({ children, projects }: AnimateUiProps) => {
  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectListRef.current) return;

    // Remove enter animation and apply leave animation
    projectListRef.current.classList.remove("animate-enters");
    projectListRef.current.classList.add("animate-leaves");

    const timeoutId = setTimeout(() => {
      if (!projectListRef.current) return;

      projectListRef.current.classList.remove("animate-leaves");

      // Only add enter animation if projects exist
      if (projects.length > 0) {
        projectListRef.current.classList.add("animate-enters");
      }
    }, 300);

    // Clear timeout if necessary
    return () => {
      clearTimeout(timeoutId);
    };
  }, [projects]);

  return <div ref={projectListRef}>{projects.length > 0 && children}</div>;
};

export default AnimateUi;
