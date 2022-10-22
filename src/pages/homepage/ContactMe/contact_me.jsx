import React from "react";

import PermanentDrawer from "../../../components/PermanentDrawer/permanent_drawer";
import { Divider, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";


function ContactCard({contact}) {
  return (
    <div style={{display: "flex", width: "100%", padding: "1%", alignItems: "center"}}>
      <div style={{marginRight: "1%", marginLeft: "1%"}}>
        {contact.icon}
      </div>
      <Typography variant="h6">
        {contact.value}
      </Typography>
    </div>
  )
}

function About() {
  const contactInfo = [
    {
      icon: <EmailRounded fontSize="medium" />,
      value: "atharvasune@gmail.com"
    },
    {
      icon: <LinkedIn fontSize="medium" style={{color: "blue"}} />,
      value: <a rel="noreferrer" href="https://www.linkedin.com/in/atharva-sune" target={"_blank"}>/atharva-sune</a>
    },
    {
      icon: <GitHub fontSize="medium" style={{color: "black"}} />,
      value: <a rel="noreferrer" href="https://www.github.com/atharvasune" target={"_blank"}>/atharvasune</a>
    }
  ]
  return (
    <Typography padding={"1%"} style={{width: "100%"}}>
      Hey... well if you want to contact me, for professional reasons or personal reasons, this is the section to be at.
      <br/>
      <Divider />
      {contactInfo.map(val => (
        <ContactCard contact={val} />
      ))}
    </Typography>
  )
}

function ContactMe() {
  
  const listItems = [
    {
      title: "About",
      icon: <InfoIcon />,
    },
  ];
  return (
    <div style={{ display: "flex", height: "91vh" }}>
      <PermanentDrawer listItems={listItems} activeTab={"About"} />
      <About />
    </div>
  );
}

export default ContactMe;
