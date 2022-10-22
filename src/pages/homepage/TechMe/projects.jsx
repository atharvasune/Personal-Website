import React from 'react'

import { Box } from '@mui/material';
import ProjectCard from '../../../components/ProjectCard/project_card';

import ProjectsArray from "../../../assets/json/project_details.json";

function Projects() {
    return (
      <Box
        component={"div"}
        style={{
          width: "100%",
          padding: "1% 1% 0 1%",
          paddingBottom: 0,
          overflowY: "auto",
          backgroundColor: "rgb(248,248,248)",
          height: "calc(100% - 2%)",
          borderBottomRightRadius: "8px",
        }}
      >
        {ProjectsArray.map((val) => {
          return <ProjectCard project={val} />;
        })}
      </Box>
    );
  }

export default Projects