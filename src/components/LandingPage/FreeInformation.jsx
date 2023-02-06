import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import {
  freeInformationButton,
  headingBigStyle,
  headingBoxWrapper,
  headingSmallStyle,
  inputBaseStyle,
  mainBoxWrapper,
} from "../../style/FreeInformationStyle.js";
import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";

const FreeInformation = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 0px 80px 0px",
        background: "#729EA4",
        backgroundImage: "url(./images/freeinfobg.jpg)",
        backgroundPosition: "center"
      }}
    >
      <Box style={mainBoxWrapper}>
        <Box style={headingBoxWrapper}>
          <Typography style={headingBigStyle}>
            Get discounts, info, estate tips, and more
          </Typography>
          <Typography style={headingSmallStyle}>
            Sign up for promotional emails
          </Typography>
        </Box>

        <Box
          style={{
            display: "flex",
            width: "100%",
            gap: "2%",
          }}
        >
          <InputBase
            placeholder="Your email address"
            style={inputBaseStyle}
          />

          <Button style={freeInformationButton}>Free Information</Button>
        </Box>
        
      </Box>

    </LandingPageCommonWrapper>
  );
};

export default FreeInformation;
