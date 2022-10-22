import React from 'react'

import { Box, Typography } from '@mui/material';

function Skills() {
    return (
      <Box
        style={{
          width: "100%",
          component: "div",
          height: "91vh",
          padding: "1%",
          textOverflow: "ellipsis",
          overflowY: "auto",
          paddingTop: "3px",
        }}
      >
        <Typography style={{ fontFamily: "Inter", fontSize: "1.1rem" }}>
          Heyy.. Looks like you wanna know more about the technical side of me.{" "}
          <br />
          <br />
          As the introduction said, I am a software developer with an interest in
          developing highly performant and scalable applications. <br />I am a
          full stack developer, but I prefer backend development more. Here are
          some of the languages | frameworks | libraries I am comfortable with
          <ul style={{ marginTop: "0", marginBottom: "10px" }}>
            <li>FrontEnd</li>
            <ul>
              <li>Html, CSS (obviously 😬)</li>
              <li>Javascript - ReactJs, NextJs</li>
            </ul>
            <li>Backend</li>
            <ul>
              <li>Python - Flask, Django (learning it)</li>
              <li>Java - Spring Boot, Helidon</li>
              <li>ExpressJs</li>
            </ul>
            <li>Some other stuff</li>
            <ul>
              <li>Cloud - AWS, OCI</li>
              <li>GIT, Jira, GitHub</li>
              <li>Mobile Development - Flutter, Swift(learning it)</li>
            </ul>
          </ul>
          
          This is all I know now, and I am learning a bunch of stuff more, moving towards my goal of a full stack mobile & web
          developer
        </Typography>
      </Box>
    );
  }

export default Skills