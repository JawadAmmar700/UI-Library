"use client";
import React, { useState } from "react";
import SectionTitle from "./section-title";
import Separator from "./separator";
import { ProjectsList } from "@/lib/constants";
import HighlightText from "./highlight-text";
import { MinusIcon, PlusIcon } from "lucide-react";
import Select from "./Select";

const Projects = () => {
  const [projectId, setProjectId] = useState(0);
  return (
    <div className="mt-5 relative flex flex-col space-y-2">
      <div>
        <div className="flex items-center justify-between">
          <SectionTitle>PROJECTS</SectionTitle>
          <Select
            defaultValue="Next.Js"
            onChange={(value) => console.log("Selected value:", value)}
          />
        </div>
        <Separator />

        <p className="font-semibold text-xs mt-2">
          As an ambitious and dedicated developer, I have gained a solid
          foundation in various technologies through personal projects. These
          projects not only showcase my technical abilities but also my ability
          to think creatively, solve problems and deliver results.
        </p>
        {ProjectsList.map((project, i) => (
          <div
            key={i}
            className={`mt-2 ${projectId === i && "animate-fadeIn"}`}
          >
            {projectId === i && (
              <>
                <h1 className="font-bold text-xs">
                  <HighlightText>{project.name}</HighlightText>
                </h1>
                <div className="mt-2">
                  {/* {project.details.map((details) => (
                    <p className="font-semibold text-xs mt-1">
                      &#8226; <HighlightText>{details}</HighlightText>{" "}
                    </p>
                  ))} */}
                  <p className="font-semibold text-xs mt-1">
                    {project.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
        {/* controls */}
        <div className="absolute bottom-0 right-0 rounded-lg flex flex-col items-end backdrop-blur-sm">
          <div
            onClick={() => setProjectId((prev) => prev + 1)}
            className="p-2 rounded-sm dark:bg-black/30 opacity-60 hover:opacity-90 transition-opacity duration-300 shadow cursor-pointer"
          >
            <PlusIcon className="h-4 text-black dark:text-white" />
          </div>
          <div className="p-2 mr-2 font-semibold opacity-70">
            <p>{projectId}</p>
          </div>
          <div
            onClick={() => setProjectId((prev) => prev - 1)}
            className="p-2 rounded-sm dark:bg-black/30 opacity-60 hover:opacity-90 transition-opacity duration-300 shadow cursor-pointer"
          >
            <MinusIcon className="h-4 text-black dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
