"use client";
import AnimateUi from "@/components/IOS-Picker/animate-ui";
import IOSPicker from "@/components/IOS-Picker/ios-picker";
import { Frameworks, ProjectsList } from "@/lib/constants";
import React, { useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState<readonly string[]>([]);

  const filterProjectsByFramework = (framework: string) => {
    const filtered = ProjectsList.filter(
      (project) => project.ref === framework
    );

    const names = filtered.map((project) => project.name);
    setProjects(names);
  };

  return (
    <main className="flex p-5 h-screen justify-start items-center space-x-5 w-full bg-slate-800">
      <IOSPicker
        key={154656}
        data={Frameworks}
        inView={3}
        velocity={2}
        label="Framework"
        onChange={(value) => {
          filterProjectsByFramework(value);
        }}
      />
      <AnimateUi projects={projects}>
        <IOSPicker
          key={8764565}
          data={projects}
          // @ts-ignore
          inView={4}
          velocity={2}
          label="Projects"
          onChange={(value) => {
            // Handle project change
            console.log(value);
          }}
        />
      </AnimateUi>
    </main>
  );
};

export default Page;
