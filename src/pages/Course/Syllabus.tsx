import React from "react";

/* =========================
   Types
========================= */

interface Module {
  title: string;
  topics: string[];
}

export interface SyllabusType {
  atAGlance: string;
  intro: string;
  youWillLearn: string[];
  overview: string[];
  modules: Module[];
  prerequisites: string;
}

interface SyllabusProps {
  syllabus?: SyllabusType;
}

/* =========================
   Component
========================= */

const Syllabus: React.FC<SyllabusProps> = ({ syllabus }) => {
  if (!syllabus) return null;

  return (
    <div className="mx-auto px-6 text-gray-900 leading-relaxed">
      <h2 className="text-3xl font-semibold mb-2">At a Glance</h2>
      <p className="mb-6">{syllabus.atAGlance}</p>

      <p className="mb-6">{syllabus.intro}</p>

      <h2 className="text-xl font-semibold mb-2">You Will Learn</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        {syllabus.youWillLearn.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
      {syllabus.overview.map((para: string, i: number) => (
        <p key={i} className="mb-4">
          {para}
        </p>
      ))}

      <h2 className="text-xl font-semibold mb-4">Course Syllabus</h2>
      {syllabus.modules.map((module: Module, i: number) => (
        <div key={i} className="mb-6">
          <h3 className="font-semibold">{module.title}</h3>
          <ul className="list-disc list-inside mt-2">
            {module.topics.map((topic: string, j: number) => (
              <li key={j}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
      <p>{syllabus.prerequisites}</p>
    </div>
  );
};

export default Syllabus;