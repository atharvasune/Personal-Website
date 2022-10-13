import { Card, Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";

function ProjectCard({project}) {
    const redirectToGithub = (e, link) => {
        if(link !== "")
            window.open(link, "_blank")
        else {
            alert("I deleted the github project for this, but worry not, I will soon make it again, maybe a better application this time around. Apologies for any inconvenience")
        }
    }


  return (
    <Card sx={{minWidth: 350, maxWidth: 350, marginRight: "2em", overflowY: "auto", scrollbarWidth: "1px"}}>
        <CardMedia>
            <Image
                height={200}
                width={"auto"}
                src={project.image}
                style={{objectFit:"fill"}}
            />
        </CardMedia>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100% - 200px)"}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                    {project.title} 
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small" onClick={(e) => {redirectToGithub(e, project.githubLink)}}>Learn More</Button>
            </CardActions>
        </div>
    </Card>
  );
}

export default ProjectCard;
