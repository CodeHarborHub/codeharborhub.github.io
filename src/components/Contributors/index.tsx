import React from "react";

/**
 * Contributors Component
 * This component displays a list of contributors' names.
 * 
 * @param {Object} props - The component props
 * @param {string} props.names - A comma-separated string of contributors' names
 * @returns {JSX.Element} The rendered component
 */
export default function Contributors({ names }) {
  // Split the comma-separated names string into an array of individual names
  const contributors = names.split(",");

  return (
    <div className="tutorial-tag-wrapper contributors">
      {/* Display "Contributors" if there are multiple names, otherwise "Contributor" */}
      {contributors.length > 1 ? "Contributors: " : "Contributor: "}
      {contributors.map((contributor, idx) => (
        <span key={idx} className="contributor-tag tag">
          {contributor}
        </span>
      ))}
    </div>
  );
}
