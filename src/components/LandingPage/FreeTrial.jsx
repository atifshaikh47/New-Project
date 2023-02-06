import { Box, InputBase, Typography, Button } from "@mui/material";
import React from "react";
import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";
import {
  inputEmailStyle,
  freeTrialButtonStyle,
} from "../../style/LandingPageStyle";

const FreeTrial = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        height: "80vh",
        background: "url('./images/freetrialbg.jpg')",
        backgroundSize: "contain",
        }}
        

     
    >
      {/* left side box */}
      <Box
        width="60%"
        height="100%"
        style={{
          //backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width="80%"
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {/* little left side box */}
          <Box
            style={{
              width: "360px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src="./images/logowhitebg.jpg"
              alt=""
              height="117px"
              width="174px"
              style={{
                position: "absolute",
                top: "40px",
              }}
            />
            <InputBase
              placeholder="Your email address"
              style={inputEmailStyle}
            />
          </Box>
          {/* little right side box  */}
          <Box width="200px">
            <Box height="40px" />
            <Typography
              style={{
                fontSize: "27px",
                fontWeight: "700",
                lineHeight: "2rem",
                // fontFamily: "Eastman Roman Trial",
                fontStyle: "normal",
                color: "#08262A",
              }}
            >
              Simplify the transfer of your assets with a digital vault
            </Typography>
            <Box height="62px" />
            <Button style={freeTrialButtonStyle}>Free Trial</Button>
            <Typography
              style={{
                fontSize: "11px",
                color: "#737373",
                fontWeight: "400",
                marginTop: "10px"
              }}
            >
              Try it for free 14 days! Cancel anytime
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* right side box*/}

      <Box width="40%" height="100%">
        {/* <img src="./images/door.jpg" alt="" height="100%" width="100%" /> */}
      </Box> 
    </LandingPageCommonWrapper>
  );
};

export default FreeTrial;
