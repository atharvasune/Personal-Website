import React, {useState} from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

import PermanentDrawer from "../../components/permanent_drawer";
import InfoIcon from "@mui/icons-material/Info";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ComputerIcon from "@mui/icons-material/Computer";
import ComingSoon from "../../components/coming_soon";


function About() {
    return (
        <Typography style={{fontFamily: "Roboto", fontSize: "1.1rem"}}>
            Heyy.. Looks like you wanna know more about the technical side of me. <br/><br/>
            
            As the introduction said, I am a software developer with an interest in developing highly performant and scalable applications. <br/>
            I am a full stack developer, but I prefer backend development more. Here are some of the languages | frameworks | libraries I am comfortable with <br/>
            <ul>
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
            and I believe in learning daily, so this list will always increase 😉. 

        </Typography>
    )
}

function TechMe() {

    const [currentTab, setCurrenTTab] = useState("About");

  const listItems = [
    {
      title: "About",
      icon: <InfoIcon />,
    },
    {
      title: "Blogs",
      icon: <RssFeedIcon />,
    },
    {
      title: "Projects",
      icon: <ComputerIcon />,
    },
  ];


  return (
    <div style={{ display: "flex", width: "100%" }}>
      <PermanentDrawer listItems={listItems} onClick={(tabValue) => setCurrenTTab(tabValue)} activeTab={currentTab} />
      <Box padding={ currentTab === "About" ? "1%" : 0} width={"100%"}>
        {currentTab === "About" ? <About /> : <ComingSoon />}
      </Box>
    </div>
  );
}

export default TechMe;
