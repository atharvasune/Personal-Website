import React, { useState } from "react";

import PermanentDrawer from "../../../components/PermanentDrawer/permanent_drawer";
import InfoIcon from "@mui/icons-material/Info";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ComputerIcon from "@mui/icons-material/Computer";
import ComingSoon from "../../../components/ComingSoon/coming_soon";
import CardMembershipRounded from "@mui/icons-material/CardMembershipRounded";

import Projects from "./projects";
import Skills from "./skills";
import Certifications from "./certifications";
import Blogs from "./blogs";

export default function TechMe() {
  const [currentTab, setCurrenTTab] = useState("Skills");

  const listItems = [
    {
      title: "Skills",
      icon: <InfoIcon />,
    },
    {
      title: "Projects",
      icon: <ComputerIcon />,
    },
    {
      title: "Blogs",
      icon: <RssFeedIcon />,
    },
    {
      title: "Certifications",
      icon: <CardMembershipRounded />
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "91vh"
      }}
    >
      <PermanentDrawer
        listItems={listItems}
        onClick={(tabValue) => setCurrenTTab(tabValue)}
        activeTab={currentTab}
      />
      {currentTab === "Skills" ? (
        <Skills />
      ) : currentTab === "Projects" ? (
        <Projects />
      ) : currentTab === "Certifications" ? (
        <Certifications />
      ) : currentTab === "Blogs" ? (
        <Blogs />
      ): <ComingSoon />
      }
    </div>
  );
}
