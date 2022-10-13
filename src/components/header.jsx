import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Image } from "mui-image";

import personal_photo from "/Users/atharvasune/Desktop/Project/personal-website/src/assets/images/personal_photo.jpeg";

function Header() {

  return (
    <header
      style={{
        width: "90%",
        height: "35vh",
        margin: "auto",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgb(200,200,200)",
        marginTop: "3vh",
      }}
    >
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1%"
          }}
        >
          <Image
            src={personal_photo}
            width={"70%"}
            height={"90%"}
            fit="cover"
            style={{ margin: "auto", marginTop: "-5%" }}
          />
        </Grid>
        <Grid
          item
          xs={9}
          style={{
            paddingTop: "0.8%",
            paddingRight: "2.5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontSize: "22px" }}>
            <span style={{ fontSize: "1.2em" }}>Hi</span>, Welcome
            <br />I am{" "}
            <span style={{ fontSize: "1.5em", fontWeight: 600 }}>
              Atharva Sune
            </span>
            , nice to meet you !!!.
            <br />I am a{" "}
            <span style={{ fontSize: "1em", fontWeight: 500 }}>
              Software Developer 💻
            </span>{" "}
            by profession, with an interest in developing highly performant and
            scalable applications. <br />
            Outside of work I am a{" "}
            <span style={{ fontSize: "1em", fontWeight: 500 }}>
              Hobbyist Photographer 📷{" "}
            </span>
            ,... super interested in
            <span style={{ fontSize: "1em", fontWeight: 500 }}>
              Travelling 🛫
            </span>
            ,... hit the{" "}
            <span style={{ fontSize: "1em", fontWeight: 500 }}>Gym 🏋️‍♂️</span>{" "}
            (alot 😬), and play{" "}
            <span style={{ fontSize: "1em", fontWeight: 500 }}>
              Badminton 🏸.
            </span>
          </Typography>
          {/* <Typography style={{ fontSize: "0.9em", textAlign: "center" }}>
            To know more about me, explore the website, Hope you have fun 😄 !!!
          </Typography> */}
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
