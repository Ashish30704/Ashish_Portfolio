import React from "react";
import PortfolioCard from "./PortfolioCard";

const works = [
  {
    imgSrc: "/images/Projects/Coffee.png",
    title: "Online Coffee Shop",
    tags: ["FireBase", "Redux", "Mobile App"],
    projectLink: "https://github.com/Ashish30704/CoffeeApp",
  },
  {
    imgSrc: "/images/Projects/Tic_tac_toe.png",
    title: "Online Multiplayer Tic Tac Toe",
    tags: ["Redux", "FireStore", "Game"],
    projectLink: "https://github.com/Ashish30704/Tic_Tac_Toe",
  },
  {
    imgSrc: "/images/Projects/Smart_kiryana.png",
    title: "Smart Kiryana",
    tags: ["Store", "React-Native", "Mobile App"],
    projectLink: "https://github.com/Ashish30704/SmartKiryana",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <PortfolioCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              classes='reveal-up'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
