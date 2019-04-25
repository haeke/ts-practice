import React from "react";

import { Link } from "react-router-dom";

const ProjectCard: React.SFC<{
  projectHeader: string;
  projectLink: string;
  projectDate: string;
  projectDescription: string;
}> = ({ projectHeader, projectLink, projectDate, projectDescription }) => {
  return (
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <h3 className="mb-0">
            <Link to={projectLink}>{projectHeader}</Link>
        </h3>
        <div className="mb-1 text-muted">{projectDate}</div>
        <p className="card-text mb-auto">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
