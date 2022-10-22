import Image from "mui-image";
import React from "react";
import { Button, Typography } from "@mui/material";

import "./project_card.css";

function ProjectCard({ project }) {
  const redirectToGithub = (e, link) => {
    if (link !== "") window.open(link, "_blank");
    else {
      alert(
        "I deleted the github project for this, but worry not, I will soon make it again, maybe a better application this time around. Apologies for any inconvenience"
      );
    }
  };

  return (
    <div class="project-card-container">
      <div class="project-card-thumbnail">
        <Image
          src={project.image}
          width={"100%"}
          style={{
            objectFit: "fill",
            borderRadius: "8px",
            border: "1px solid rgba(100,100,100,0.4)"
          }}
        />
      </div>
      <div class="project-card-details">
        <Typography variant="h5" fontFamily={"Space Mono"}>
          {project.title}
        </Typography>
        <Typography variant="body" fontFamily={"Inter"}>
          {project.description}
        </Typography>

        <Button
          variant="outlined"
          fullWidth={false}
          onClick={(e) => redirectToGithub(e, project.githubLink)}
          style={{width: "fit-content"}}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
