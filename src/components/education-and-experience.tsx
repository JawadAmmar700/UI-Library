import React from "react";
import SectionTitle from "./section-title";
import Separator from "./separator";
import { Education, Experience } from "@/lib/constants";
import HighlightText from "./highlight-text";

const EducationAndExperience = () => {
  return (
    <div className="mt-5">
      <div>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <Separator />
        <div className="mt-2 flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-xs">
              <HighlightText>{Experience.position}</HighlightText>
            </h1>
            <h2 className="font-bold text-xs opacity-80">
              <HighlightText>{Experience.companyName}</HighlightText>
            </h2>
          </div>
          <p className="font-bold text-xs">
            <HighlightText>
              {`${Experience.startDate + " - " + Experience.endDate}`}
            </HighlightText>
          </p>
        </div>
        <div className="flex flex-col mt-2">
          {Experience.keyPoints.length > 0 &&
            Experience.keyPoints.map((keyPoint, i) => (
              <p key={i} className="font-semibold text-xs">
                &#8226; <HighlightText>{keyPoint}</HighlightText>{" "}
              </p>
            ))}
        </div>
      </div>
      <div className="mt-5">
        <SectionTitle>EDUCATION</SectionTitle>
        <Separator />
        {Education.map((education, i) => (
          <div key={i} className="mt-2 ">
            <div className="flex flex-col">
              <div className="font-bold text-xs flex justify-between">
                <HighlightText>{education.degree}</HighlightText>
                <p className="font-bold text-xs ">
                  {education.startDate && (
                    <HighlightText>{education.startDate!}</HighlightText>
                  )}
                  {i === 0 && " - "}
                  {education.endDate && (
                    <HighlightText>{education.endDate!}</HighlightText>
                  )}
                </p>
              </div>
              <h2 className="font-bold text-xs">
                {education.major && (
                  <HighlightText>{education.major}</HighlightText>
                )}
              </h2>
              <h3 className="font-bold text-xs opacity-80">
                <HighlightText>{education.collegeName}</HighlightText>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAndExperience;
