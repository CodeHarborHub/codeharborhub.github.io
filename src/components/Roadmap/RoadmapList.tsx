import React from "react";
import RoadmapCard from './RoadmapCard';

interface RoadmapListProps {
  roadmap: any[];
  updateItemStatus: (sectionIndex: number, itemIndex: number) => void;
}

const RoadmapList: React.FC<RoadmapListProps> = ({ roadmap, updateItemStatus }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {roadmap.map((section, sectionIndex) => (
        <RoadmapCard key={section.title} section={section} sectionIndex={sectionIndex} updateItemStatus={updateItemStatus} />
      ))}
    </div>
  );
};

export default RoadmapList;