import React from "react";

import Typography from "@mui/material/Typography";
import { Image } from "mui-image";

import personal_photo from "/Users/atharvasune/Desktop/Project/personal-website/src/assets/images/personal_photo.jpeg";

function Header() {
  return (
    <div
      style={{
        padding: "1.2%",
        width: "25%",
        height: "calc(94vh - 2.4%)", 
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgb(200,200,200)",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={personal_photo}
          width={"60%"}
          fit="cover"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div
        style={{ width: "100%", marginTop: "5px" }}
      >
        <section>
          <Typography variant="h4" textAlign={"center"}>
            Atharva Sune
          </Typography>
        </section>
        <br />
        <section>
          <Typography
            variant="body1"
            textAlign={"justify"}
            fontFamily={"Inter"}
          >
            Hi, I am a software developer, currently working at <b>Oracle</b> as
            an <b>Application Engineer</b> with the{" "}
            <b>Fusion Release Engineering</b> team.
            <br />
            <br />
            <li>
              I have an interest in developing highly performant and scalable
              applications.{" "}
              <br />I also take interest in Machine Learning, Artificial
              Intelligence and their applications in various fields.{" "}
            </li>
            <br />
            <li>
              {" "}
              Other than tech, I have interest in business strategies and
              product management as well and would love to connect to discuss on
              those.{" "}
            </li>
          </Typography>
        </section>
      </div>
    </div>
  );
}

export default Header;
