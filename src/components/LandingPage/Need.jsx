import React from "react";
import { Box, Typography } from "@mui/material";

import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";
import { headingSmall, headingBig, card } from "../../style/NeedStyle";

const Need = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        flexDirection: "column",
        padding: "100px 0",
        gap: "2rem",
        borderTop: "5px solid #313130",
      }}
    >
      <Box width="80%">
        <Typography style={headingBig}>Why you need the-plenty</Typography>
      </Box>

      <Box
        width="80%"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* //1st */}
        <Box style={card}>
          <Box>
            <img src="./images/questionperson.jpg" alt="" />
          </Box>

          <Box height="60px">
            <Typography style={headingSmall}>
              Closing an estate is time-consuming and stressful.
            </Typography>
          </Box>

          <Box>
            <Typography
              style={{
                textAlign: "center",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "23px",
                color: "#062529",
              }}
            >
              Financial advisors and wills don't help here. Can we expound on
              why it is so hard?
            </Typography>
          </Box>
        </Box>

        {/* 2nd box */}
        <Box style={card}>
          <Box>
            <img src="./images/checklist.jpg" alt="" />
          </Box>

          <Box height="60px">
            <Typography style={headingSmall}>
              Property frequently goes unclaimed.
            </Typography>
          </Box>

          <Box>
            <Typography
              style={{
                textAlign: "center",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "23px",
                color: "#062529",
              }}
            >
              Forgotten bank accounts, unrevealed life insurance policies, or
              previously unknown parts of the estate
            </Typography>
          </Box>
        </Box>

        {/* 3rd box */}
        <Box style={card}>
          <Box>
            <img src="./images/globe.jpg" alt="" />
          </Box>

          <Box height="60px">
            <Typography style={headingSmall}>
              We live in a paperless world.
            </Typography>
          </Box>

          <Box>
            <Typography
              style={{
                textAlign: "center",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "23px",
                color: "#062529",
              }}
            >
              The average American has over 25 digital accounts without any
              paper trail.
            </Typography>
          </Box>
        </Box>
      </Box>
    </LandingPageCommonWrapper>
  );
};

export default Need;
