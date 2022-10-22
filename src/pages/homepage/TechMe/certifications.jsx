import { Grid } from "@mui/material";
import React from "react";
import CertificationCard from "../../../components/CertificationCard/certification_card";

import CertificationsArray from "../../../assets/json/certifications.json";

function Certifications() {
  return (
    <div
      style={{
        height: "95%",
        width: "fit-content",
        overflowY: "auto",
        padding: "1%",
      }}
    >
      <Grid container columnSpacing={4} rowSpacing={1}>
        {CertificationsArray.map((certification_) => (
          <Grid item xs={12} md={3} lg={4}>
          <CertificationCard certification={certification_}/>
        </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Certifications;
