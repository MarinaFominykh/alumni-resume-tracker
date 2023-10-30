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

export const CandidatesContexMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ p: 0, h: "100%"}}
          >
            <SortingIcon sx={{ mr: 2 }} />
            <Typography sx={tableStyles.textfilter}>Сортировка</Typography>

            <ArrowIcon sx={{ ml: 2 }} />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem onClick={handleClose} sx={{ width: "188px", height: "36px" }}>
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
    </>
  );
};
