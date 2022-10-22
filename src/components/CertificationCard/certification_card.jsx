import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";

function CertificationCard({ certification }) {
  return (
    <Card style={{minWidth: "325px"}}>
      <CardMedia>
        <Image
            height={200}            
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
            width={"100%"}
            style={{objectFit: "cover"}}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" fontFamily={"Space Mono"}>
          <a
            href={certification.certLink}
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(0, 49, 83)" }}
          >
            {certification.title}
          </a>
        </Typography>
        <Typography variant="body1" fontFamily={"Inter"}>
          <b>Issuing Organization</b>: {certification.issuingOrganization}
        </Typography>
        <Typography variant="body1" fontFamily={"Inter"}>
          <b>Issue Date</b>: {certification.issueDate}
        </Typography>
        <Typography variant="body1" fontFamily={"Inter"}>
          <b>Cert Credential</b>: {certification.credential}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;
