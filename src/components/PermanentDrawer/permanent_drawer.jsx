import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

function PermanentDrawer(props) {
  return (
    <Box
      style={{
        height: "100%",
        width: "max-content",
        borderRight: "1px solid lightgray",
      }}
    >
      {console.log(props.activeTab)}
      <List disablePadding>
        {props.listItems.map((listObject, index) => {
          return (
            <>
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => props.onClick(listObject.title)}>
                  <ListItemIcon
                    style={{
                      color:
                        props.activeTab === listObject.title ? "#15365c" : "",
                    }}
                  >
                    {listObject.icon}
                  </ListItemIcon>
                  <ListItemText
                    style={{
                      color:
                        props.activeTab === listObject.title ? "#15365c" : "",
                    }}
                  >
                    <Typography fontFamily={"Comfortaa"}>
                    {listObject.title}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Box>
  );
}

export default PermanentDrawer;
