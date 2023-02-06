import { Box } from "@mui/material";
import {  styled } from "@mui/system";

const NavWrapper= styled(Box)({
    display : "flex",
    alignItems : "center",
    backgroundColor: "#EDF0F2",
    justifyContent : "space-between",
    padding : "10px 50px",
    borderRadius : "2px",
    boxShadow: '0px -4px 4px gray, 4px 1px 4px gray, -4px -4px 6px gray',
})

export default NavWrapper;
