import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import RoadmapList from '../../../components/Roadmap/RoadmapList';
import ProgressBar from '../../../components/Roadmap/ProgressBar';
import { htmlRoadmapData as htmlRoadmap } from "../../../data/roadmaps/html";

const Html: React.FC = () => {
  const [roadmap, setRoadmap] = useState(htmlRoadmap);
  const totalItems = roadmap.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = roadmap.reduce(
    (acc, section) => acc + section.items.filter((item) => item.status === "done").length,
    0
  );

  useEffect(() => {
    // Load saved roadmap from local storage
    const savedRoadmap = localStorage.getItem("htmlRoadmap");
    if (savedRoadmap) {
      setRoadmap(JSON.parse(savedRoadmap));
    }
  }, []);

  const updateItemStatus = (sectionIndex: number, itemIndex: number) => {
    const newRoadmap = [...roadmap];
    const currentStatus = newRoadmap[sectionIndex].items[itemIndex].status;

    // Toggle status between 'todo' and 'done'
    newRoadmap[sectionIndex].items[itemIndex].status = currentStatus === "todo" ? "done" : "todo";
    
    setRoadmap(newRoadmap);
    
    localStorage.setItem("htmlRoadmap", JSON.stringify(newRoadmap)); // Save to local storage
  };

  return (
    <Layout
      title="HTML Mastery Course Development"
      description="Learn HTML basics, forms, tables, SEO, and responsive web design."
    >
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          HTML Mastery Roadmap
        </h1>
        <ProgressBar completed={completedItems} total={totalItems} />
        <RoadmapList roadmap={roadmap} updateItemStatus={updateItemStatus} />
      </div>
    </Layout>
  );
};

export default Html;