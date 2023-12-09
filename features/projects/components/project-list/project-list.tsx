import React, { useState, useEffect } from "react";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingIndicator } from "@features/ui";
import { LoadingError } from "@features/ui";

export function ProjectList() {
  const { data, isError, error } = useGetProjects();
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
      <div data-testid="loading-screen">
        {" "}
        <LoadingIndicator />
      </div>
    );
  }

  // Actual loaded element or condition
  const loadedElement = <div data-testid="loaded-element"></div>;

  if (isError) {
    console.error(error);
    return (
      <div data-testid="loading-error">
        <LoadingError />
      </div>
    );
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
