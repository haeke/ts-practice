import React from "react";

import ProjectCard from "../ProjectCard/ProjectCard";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron p-3 p-md-3 text-white rounded bg-dark">
        <div className="col-md-12 px-0">
          <h1 className="display-4 font-italic">
            Personal React TypeScript Mini Project List
          </h1>
          <p className="lead my-3">
            My personal curated list of mini projects that I've created to
            familiarize myself with working with React and TypeScript.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ProjectCard
            projectHeader="Compound Interest"
            projectLink="/compound-interest"
            projectDate="Apr 19"
            projectDescription="Compound interest is the interest paid on the original principal and on the accumulated past interest."
          />
        </div>
        <div className="col-md-6">
          <ProjectCard
            projectHeader="Book Site"
            projectLink="/book-site"
            projectDate="Apr 21"
            projectDescription="A simple form that lets you keep track of the books that you're reading or have read or want to keep a reference to."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
