import { Box, Typography, Button } from "@mui/material";
import React from "react";
import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";

import {
  mainBoxWrapper,
  subBoxWrapper,
  freeTrialButtonStyle,
} from "../../style/InvestPeaceStyle.js";

const InvestInPeace = () => {
  return (
    <LandingPageCommonWrapper
      height="100vh"
      style={{
        justifyContent: "center",
      }}
    >
      <Box style={mainBoxWrapper}>
        <Typography
          style={{
            // fontWeight: "bold",
            letterSpacing: "5px",
            marginBottom: "25px",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "27px",
            lineHeight: "38px",
          }}
        >
          Invest in peace of mind
        </Typography>

        <Box style={subBoxWrapper}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                // fontWeight: "inherit",
                color: "#062528",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
              }}
            >
              Annual Plan
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box />
            <Box>
              <Typography
                style={{
                  // fontWeight: "inherit",
                  color: "#062528",
                  fontStyle: "normal",
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
                }}
              >
                $. /month
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#062528",
                  marginTop: "38px",
                }}
              >
                $. paid annually
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box style={subBoxWrapper}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                // fontWeight: "inherit",
                color: "#062528",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
              }}
            >
              Monthly Plan
            </Typography>

            <Typography
              style={{
                // fontWeight: "inherit",
                color: "#062528",
                marginRight: "25px",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "20px",
              }}
            >
              $. /month
            </Typography>
          </Box>
        </Box>
        <Typography
          style={{
            fontSize: "14px",
          }}
        >
          *plus tax where applicable
        </Typography>
        <Button style={freeTrialButtonStyle}>Start Your Free Trial</Button>
      </Box>
    </LandingPageCommonWrapper>
  );
};

export default InvestInPeace;
