import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function PermanentDrawer(props) {
  return (
    
    <Box style={{ height: "55vh", width: "200px", borderRight: "1px solid lightgray"}}>    
    {console.log(props.activeTab)}  
      <List disablePadding>
        {props.listItems.map((listObject, index) => {
          return (
            <>
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => props.onClick(listObject.title)}>
                  <ListItemIcon style={{color: props.activeTab === listObject.title ? "#15365c" : ""}}>{listObject.icon}</ListItemIcon>
                  <ListItemText style={{color: props.activeTab === listObject.title ? "#15365c" : ""}}>{listObject.title}</ListItemText>
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
