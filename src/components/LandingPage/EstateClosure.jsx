import { Box, Typography } from "@mui/material";
import React from "react";

import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";
import {
  headingBig,
  headingSmall,
  tile,
  numberBox,
  numberBoxWrapper,
} from "../../style/EstateClousureStyle.js";

const EstateClosure = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        justifyContent: "center",
        padding: "60px 0px",
        borderTop: "5px solid #313130",
        borderBottom: "5px solid #CBFB59",
      }}
    >
      {/* main box */}
      <Box
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          {/* for headline */}
          <Typography style={headingBig}>
            The-plenty makes estate closure easy.
          </Typography>
        </Box>

        <Box
          width="100%"
          style={{
            display: "flex",
            marginTop: "50px",
            gap: "10%",
          }}
        >
          <Box
            width="30%"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5%",
              }}
            >
              <Box style={numberBoxWrapper}>
                <Box style={numberBox}>1</Box>
              </Box>
              <Box style={tile}>
                <Typography style={headingSmall}>Record</Typography>
                <Typography
                  style={{
                    color: "#062529",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",

                    lineHeight: "23px",
                  }}
                >
                  Input estate data into the-plenty secure platform
                </Typography>
              </Box>
            </Box>

            <Box
              style={{
                display: "flex",
                gap: "5%",
              }}
            >
              <Box style={numberBoxWrapper}>
                <Box style={numberBox}>2</Box>
              </Box>
              <Box style={tile}>
                <Typography style={headingSmall}>Share</Typography>
                <Typography
                  style={{
                    color: "#062529",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "23px",
                  }}
                >
                  Named beneficiaries notified of the vault
                </Typography>
              </Box>
            </Box>

            <Box
              style={{
                display: "flex",
                gap: "5%",
              }}
            >
              <Box style={numberBoxWrapper}>
                <Box style={numberBox}>3</Box>
              </Box>
              <Box style={tile}>
                <Typography style={headingSmall}>Close</Typography>
                <Typography
                  style={{
                    color: "#062529",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",

                    lineHeight: "23px",
                  }}
                >
                  In the event of death, beneficiaries granted access
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box width="60%">
            {/* image */}
            <img src="./images/closureimage.jpg" alt="" width="100%" />
          </Box>
        </Box>
      </Box>
    </LandingPageCommonWrapper>
  );
};

export default EstateClosure;
