import React from "react";
import Tags from "../Tags";

export default function Table({
  title,
  collectionLink,
  isSorted = true,
  data,
}) {
  const hasTopic: boolean = data.some((d: any) => d.tags);
  const sortOrder = {
    Easy: 0,
    Medium: 1, 
    Hard: 2,
  };
  const renderDifficultyClassName = (difficulty: string): string => {
    return difficulty.toLowerCase();
  };
  const renderRow: JSX.Element[] = (
    isSorted
      ? data.sort((x: any, y: any) => sortOrder[x.difficulty] - sortOrder[y.difficulty])
      : data
  ).map((d: any, idx: number) => {
    return (
      <tr key={idx}>
        <td>
          <a href={d.leetCodeLink} target="_blank" rel="noopener noreferrer">
            {d.problemName}
          </a>
        </td>
        <td className={renderDifficultyClassName(d.difficulty)}>
          {d.difficulty}
        </td>
        <td style={{ textAlign: "center" }}>
          {d.solutionLink && (
            <a href={d.solutionLink} target="_blank" rel="noopener noreferrer">
              View Solutions
            </a>
          )}
          {!d.solutionLink && <span>N/A</span>}
        </td>
        {hasTopic && (
          <td>
            <Tags names={d.tags} />
          </td>
        )}
      </tr>
    );
  });

  return (
    <>
      <h3>{title}</h3>
      {collectionLink && (
        <h4>
          Start Practicing:{" "}
          <a href={collectionLink} target="_blank" rel="noopener noreferrer">
            {collectionLink}
          </a>
        </h4>
      )}
      <table className="suggested-problem-table">
        <thead>
          <tr>
            <th>Problem Name</th>
            <th>Difficulty</th>
            <th>Solution Link</th>
            {hasTopic && <th>Topic</th>}
          </tr>
        </thead>
        <tbody>{renderRow}</tbody>
      </table>
    </>
  );
}