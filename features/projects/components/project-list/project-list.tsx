import React, { useState, useEffect } from "react";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a 5-second delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Set showLoading to false after the delay
      setShowLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (showLoading) {
    return (
      <div
        className={`${styles.loading} ${isLoading ? styles.rotate : ""}`}
        data-testid="loading-screen"
      >
        <svg
          className={`${styles.loading} ${isLoading ? styles.rotate : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 66 66"
          fill="none"
        >
          <circle
            className={styles.loading}
            cx="33"
            cy="33"
            r="30"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#7F56D9"
            strokeDasharray="187"
            strokeDashoffset="187"
            style={{
              strokeDashoffset: isLoading ? "0" : "187",
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />
        </svg>
      </div>
    );
  }

  // Actual loaded element or condition
  const loadedElement = <div data-testid="loaded-element"></div>;

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {loadedElement}
      <ul className={styles.list} data-testid="project-list">
        {data?.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
