import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/Nav.module.css";

const ProjectSection: FunctionComponent = () => {
  return (
    <section id="Projects">
      <article>
        <h3>Projects</h3>
        <div className="projects-container">
          <figure className="project-card">
            <h4>Dotabeef</h4>
            <a href="http://trfielder.github.io/dotabeef">
              <img
                className="project-preview-image"
                alt="Preview of project:
            dotabeef"
              />
            </a>
            <figcaption>
              A stats tracking tool for dota 2 based on dotabuff.com, built with
              ReactJS and the Opendota API. Github:
              <a href="http://github.com/TRFielder/dotabeef">
                <i className="devicon-github-original" role="link"></i>
              </a>
            </figcaption>
          </figure>
          <figure className="project-card">
            <h4>Where&apos;s That Pokemon?</h4>
            <a href="http://trfielder.github.io/wheres-that-pokemon">
              <img
                className="project-preview-image"
                alt="Preview of project:
            Where's that Pokemon"
              />
            </a>
            <figcaption>
              A &quot;Where&apos;s Wally&quot; style game built with ReactJS and
              Firebase to manage a global leaderboard. Github:
              <a href="http://github.com/TRFielder/wheres-that-pokemon">
                <i className="devicon-github-original" role="link"></i>
              </a>
            </figcaption>
          </figure>
          <figure className="project-card">
            <h4>Memoe Cards</h4>
            <a href="http://trfielder.github.io/Memoe-cards">
              <img
                className="project-preview-image"
                alt="Preview of project:
            Memoe Cards"
              />
            </a>
            <figcaption>
              A memory game built with ReactJS and a community API for Genshin
              Impact game data. Github:
              <a href="http://github.com/TRFielder/Memoe-cards">
                <i className="devicon-github-original" role="link"></i>
              </a>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default ProjectSection;
