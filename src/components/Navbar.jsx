import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
   borderRadius: theme.shape.borderRadius,
    margin:'10px 0'
  // padding: "0 10px",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "flex",
  //   },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const search = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <Autocomplete
            
            renderInput={(params) => (
              <TextField {...params} label="Search ......" />
            )}
            options={search}
          />
        </Search>
        <IconBox sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <EmailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsActiveIcon color="white" />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{
              height: "30px",
              width: "30px",
            }}
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          />
        </IconBox>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{
              height: "30px",
              width: "30px",
            }}
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
          />
          <Typography variant="p">Rwan Fathy </Typography>
        </UserBox>
      </StyleToolBar>

      <Menu
        onClose={(e) => setOpen(false)}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
