import * as React from "react";
import {
  Tooltip,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import './contexMenu.css'
import { contexMenuStyles } from "./contexMenuStyles"; 
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
            aria-controls={open ? "-menu" : undefined}
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
        anchorOrigin={{ horizontal: 0, vertical: 35 }}
        transformOrigin={{ horizontal: 0, vertical: "top" }}
      >
        <MenuItem onClick={handleClose} sx={contexMenuStyles.candidatesMenuItem}>
          <Typography variant="body2">Сначала новые</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={contexMenuStyles.candidatesMenuItem}>
          <Typography variant="body2">Сначала активные</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={contexMenuStyles.candidatesMenuItem}>
          <Typography variant="body2">Сначала опытные</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={contexMenuStyles.candidatesMenuItem}>
          <Typography variant="body2">Сначала новички</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
