import React from "react";
import FlexBetween from "./FlexBetween";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import NavWrapper from "../wrappers/NavWrapper";

import {
  linkStyle,
  logInButtonStyle,
  claimButtonStyle,
} from "../style/NavbarStyle.js";

export const Navbar = () => {
  return (
    <NavWrapper>
      <Box width="33%">
        <FlexBetween>
          <img src="./images/theplentylogobg.jpg" alt="" style={{
            height: "27.8px",
            width: "110.33px"
          }} />

          <Box width="66.2%">
            <FlexBetween>
              <Link style={linkStyle} to="/plenty">
                WHY the-plenty
              </Link>
              <Link style={linkStyle} to="/product">
                Product
              </Link>
              <Link style={linkStyle} to="/pricing">
                Pricing
              </Link>
            </FlexBetween>
          </Box>
        </FlexBetween>
      </Box>
      <Box width="25%">
        <FlexBetween>
          <Button style={logInButtonStyle}>Log-In</Button>
          <Button style={claimButtonStyle}>Submit a claim</Button>
        </FlexBetween>
      </Box>
    </NavWrapper>
  );
};
