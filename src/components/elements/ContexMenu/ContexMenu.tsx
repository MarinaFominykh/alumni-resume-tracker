import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ArchiveIcon, DeleteIcon, EditIcon } from "../../../consts/icons";
import { contexMenuStyles } from "./contexMenuStyles";
import { Typography } from "@mui/material";

export const ContexMenu = () => {
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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon color="primary" />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
            padding: "0",
            borderRadius: '4px',
          },
        }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={contexMenuStyles.vacanciesMenuItem}
          onClick={handleClose}
          disableRipple
        >
          <EditIcon sx={{ height: "20px", width: "20px", mr: "8px" }} />
          <Typography variant="body2" sx={{ color: "black" }}>
            Редактировать
          </Typography>
        </MenuItem>
        <MenuItem
          sx={contexMenuStyles.vacanciesMenuItem}
          onClick={handleClose}
          disableRipple
        >
          <ArchiveIcon sx={{ height: "20px", width: "20px", mr: "8px" }} />
          <Typography variant="body2" sx={{ color: "black" }}>
            В архив
          </Typography>
        </MenuItem>
        <MenuItem
          sx={contexMenuStyles.vacanciesMenuItem}
          onClick={handleClose}
          disableRipple
        >
          <DeleteIcon sx={{ height: "20px", width: "20px", mr: "8px" }} />
          <Typography variant="body2" sx={{ color: "black" }}>
            Удалить
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
