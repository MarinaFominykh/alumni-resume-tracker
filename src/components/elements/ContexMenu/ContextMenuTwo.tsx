import * as React from "react";
import {
  Tooltip,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";

import { tableStyles } from "../../Table/styles";
import { ArrowIcon, SortingIcon } from "../../../consts/icons";

export const ContextMenuTwo = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <SortingIcon/>
            <Typography sx={tableStyles.textfilter}>Сортировка</Typography>
          
            <ArrowIcon/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Typography>Сначала новые</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Сначала активные</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Сначала опытные</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Сначала новички</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
