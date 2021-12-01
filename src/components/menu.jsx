import { ListItemText, MenuList, MenuItem, Paper } from "@mui/material";
import React from "react";

const Menu = (props) => {
  const furnitureModels = ["All", "Sofa", "Bed", "Storage", "Chair"];
  return (
    <div>
      <Paper elevation={21}>
        <MenuList>
          {furnitureModels.map((cat) => (
            <MenuItem>
              <ListItemText
                component="button"
                onClick={() => props.handleCategory(cat)}
              >
                {cat}
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </div>
  );
};

export default Menu;
