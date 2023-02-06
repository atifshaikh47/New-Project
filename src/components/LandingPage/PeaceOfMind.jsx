import React from "react";
import { Box, Typography } from "@mui/material";

import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";

const PeaceOfMind = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        height: "70vh",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "2rem",
        color: "#000",
        textAlign: "center",
        paddingTop: "80px",
        background: "url('./images/peaceofmindbg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <Typography
          style={{
            // fontSize: "75px",
            color: "#2B595E",
            // fontFamily: "Eastman Roman Trial",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "70px",
            lineHeight: "82px",
          }}
        >
          PEACE OF MIND
        </Typography>
      </Box>

      <Box>
        <Typography
          style={{
            fontWeight: "900",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#08262A",
          }}
        >
          Simplify your estate
        </Typography>
        <Typography
          style={{
            fontWeight: "900",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#08262A",
          }}
        >
          transfer by providing
        </Typography>
        <Typography
          style={{
            fontWeight: "900",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#08262A",
          }}
        >
          digital access to your
        </Typography>
        <Typography
          style={{
            fontWeight: "900",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#08262A",
          }}
        >
          beneficiaries.
        </Typography>
      </Box>

      <Box>
        <Typography
          style={{
            fontWeight: "900",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#08262A",
          }}
        >
          See how easy it is with
        </Typography>
        <Typography
          style={{
            fontWeight: "900",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#08262A",
          }}
        >
          the plenty.
        </Typography>
      </Box>
    </LandingPageCommonWrapper>
  );
};

export default PeaceOfMind;
