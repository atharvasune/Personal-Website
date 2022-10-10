import React from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ContactMe from "./contact_me";
import PersonalMe from "./personal_me";
import TechMe from "./tech_me";

import { useState } from "react";

export default function HomePage() {

    const [tabValue, setTabValue] = useState(0);

  return (
    <section
      style={{
        width: "90%",
        margin: "auto",
        marginBottom: "2vh",
        height: "60vh",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgb(200,200,200)",
        marginTop: "2vh",
      }}
    >
       <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered style={{width: "100%", height: "2vh", borderBottom: "1px solid lightgray"}}>
            {["Tech Me", "Personal Me", "Contact Me"].map((text, index) => (
                <Tab label={text} key={index} style={{textTransform: "none", fontSize: "22px", color: "black", fontFamily: "Roboto", width: "25%"}}/>
            ))}
       </Tabs>
       {tabValue === 0 ? <TechMe /> : tabValue === 1 ? <PersonalMe /> : <ContactMe />}
    </section>
  );
}
