import React from "react";

import PermanentDrawer from "../../components/permanent_drawer";
import InfoIcon from "@mui/icons-material/Info";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import ComingSoon from "../../components/coming_soon";

function ContactMe() {
  const listItems = [
    {
      title: "About",
      icon: <InfoIcon />,
    },
    {
      title: "Professional Contact",
      icon: <BusinessIcon />,
    },
    {
      title: "Personal Contact",
      icon: <PersonIcon />,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <PermanentDrawer listItems={listItems} activeTab={"About"} />
      <ComingSoon />
    </div>
  );
}

export default ContactMe;
