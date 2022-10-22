import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ContactMe from "./ContactMe/contact_me";
import TechMe from "./TechMe/index";

import { useState } from "react";

export default function HomePage() {
  const [tabValue, setTabValue] = useState(0);
  // React.useEffect(() => {
  //   alert("This is V1 of the website, the design is not the best, and I assure you I am working on improving it. 😅")
  // }, [])
  return (
    <section
      style={{
        width: "100%",
        marginLeft: "1%",
        background: "white",
        height: "96vh",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgb(200,200,200)",
      }}
    >
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        centered
        style={{
          width: "100%",
          height: "2vh",
          borderBottom: "1px solid lightgray",
        }}
      >
        {["Tech Me", "Contact Me"].map((text, index) => (
          <Tab
            label={text}
            key={index}
            style={{
              textTransform: "none",
              fontSize: "22px",
              color: "black",
              fontFamily: "Space Mono",
              width: "25%",
            }}
          />
        ))}
      </Tabs>
      {tabValue === 0 ? (
        <TechMe />
      ) : (
        <ContactMe />
      )}
    </section>
  );
}
