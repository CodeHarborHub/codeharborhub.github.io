import React from "react";

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          {completed} / {total} Completed
        </span>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
        <div
          style={{ width: `${percentage}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
            percentage === 100 ? "bg-green-500" : "bg-teal-500"
          }`}
         />
      </div>
    </div>
  );
};

export default ProgressBar;