import React from "react";
import Link from "@docusaurus/Link";

interface RoadmapCardProps {
  section: {
    title: string;
    items: { text: string; status: string; link: string }[];
  };
  sectionIndex: number;
  updateItemStatus: (sectionIndex: number, itemIndex: number) => void;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  section,
  sectionIndex,
  updateItemStatus,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 dark:text-white text-center">
        {section.title}
      </h2>
      <ul>
        {section.items.map((item, itemIndex) => (
          <li key={item.text} className="flex items-center mb-2">
            <span
              className={
                item.status === "done" ? "line-through text-gray-500" : ""
              }
            >
              <Link to={item.link}>{item.text}</Link>
            </span>
            <button
              className={`ml-auto px-4 py-2 rounded-full border-none text-xs font-semibold ${
                item.status === "done"
                  ? "bg-gray-300"
                  : "bg-green-500 text-white"
              }`}
              onClick={() => updateItemStatus(sectionIndex, itemIndex)}
            >
              {item.status === "done" ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapCard;
