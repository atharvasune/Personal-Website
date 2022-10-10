import React from "react";

import PermanentDrawer from "../../components/permanent_drawer";
import InfoIcon from "@mui/icons-material/Info";
import CameraIcon from "@mui/icons-material/Camera";
import FlightTakeOffIcon from "@mui/icons-material/FlightTakeoff";
import ComingSoon from "../../components/coming_soon";

function PersonalMe() {
  const listItems = [
    {
      title: "About",
      icon: <InfoIcon />,
    },
    {
      title: "Photography",
      icon: <CameraIcon />,
    },
    {
      title: "Travel",
      icon: <FlightTakeOffIcon />,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <PermanentDrawer listItems={listItems} activeTab={"About"} />
      <ComingSoon />
    </div>
  );
}

export default PersonalMe;
