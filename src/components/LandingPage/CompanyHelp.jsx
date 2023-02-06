import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

import { iconStyle, linkBoxWrapper,linkStyle } from "../../style/CompanyHelpStyle.js";
import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";


const CompanyHelp = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        justifyContent: "center",
        background: "#ECF0F3",
        
      }}
    >
      <Box
        style={{
          width: "80%",
          borderTop: "2px solid #000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px 10px 50px 50px"
        }}
      >
        <Box 
        style={{
            display: "flex",
            justifyContent: "flex-end"
        }}
        >
        <Box 
        style={{
            display: 'flex',
            gap: "0.5rem",

        }}
        >
            <Box><FacebookRoundedIcon style={iconStyle}/></Box>
            <Box><TwitterIcon style={iconStyle}/></Box>
            <Box><PinterestIcon style={iconStyle}/></Box>
        </Box>

        </Box >
        <Box style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Box
          style={{
            display: "flex",
            gap: "3%",
            width: "50%",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "40%",
            }}
          >
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Company
            </Typography>

            <Box
              style={linkBoxWrapper}
            >
              <Link style={linkStyle} to="/about">About</Link>
              <Link style={linkStyle} to="/newsroom">News Room</Link>
              <Link style={linkStyle} to="/security">Security</Link>
              <Link style={linkStyle} to="/privacysettings">Privacy Settings</Link>
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "50%",
            }}
          >
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Help
            </Typography>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",

              }}
            >
              <Link style={linkStyle} to="/contact">Contact</Link>
              <Link style={linkStyle} to="/legalinfo">Legal Information</Link>
              <Link style={linkStyle} to="/membersupport">Member Support Center</Link>
              <Link style={linkStyle} to="/license_services">License And Services</Link>
              <Link style={linkStyle} to="/renewal">Renewal Pricing</Link>
              <Link style={linkStyle} to="/cancellation_refund_policy">Cancellation And Refund Policy</Link>
            </Box>
          </Box>
        </Box>
        <Box  
        style={{
            position: "relative",
            width:"20%"

        }}>
            <img src="./images/logo.jpg" alt="" style={{
                position: "absolute",
                bottom: "0px",
                right: "0px"
            }} />
        </Box>
        </Box>

      </Box>
    </LandingPageCommonWrapper>
  );
};

export default CompanyHelp;
