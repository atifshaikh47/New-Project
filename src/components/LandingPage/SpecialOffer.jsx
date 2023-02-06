import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LandingPageCommonWrapper from "../../wrappers/LandingPageCommonWrapper";

const SpecialOffer = () => {
  return (
    <LandingPageCommonWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // gap: "0.5rem",
          border: "4px solid #CBFB59",
          padding: "20px",
          alignItems: "center",
          width: "39%",
          background: "#ECF0F3",
        }}
      >
        <Typography
          style={{
            fontSize: "14px",
            marginTop: "100px",
          }}
        >
          ENTER YOUR EMAIL BELOW TO
        </Typography>
        <Typography
          style={{
            fontSize: "35px",
          }}
        >
          Unlock a special offer
        </Typography>

        <InputBase
          placeholder="Enter your email here"
          style={{
            width: "46%",
            fontSize: "15px",
            padding: "2px 8px",
            borderRadius: "12px",
            background: "white",
            color: "gray",
            marginTop: "0.5rem",
          }}
        />

        <Button
          style={{
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
            background: "#08262A",
            textTransform: "none",
            width: "46%",
            borderRadius: "12px",
            padding: "3px 0px",
            marginTop: "1rem",
          }}
        >
          Unlock Offer
        </Button>

        <Box>
          <Link
            to="/"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "black",
            }}
          >
            No Thanks,
          </Link>
          <Link
            to="/"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "black",
              
            }}
          >
            
            Release The Offer
          </Link>
        </Box>
        <Typography 
        style={{
            fontSize: '13px',
            marginTop: '2rem'

        }}
        >Available to new customers only.</Typography>
      </Box>
    </LandingPageCommonWrapper>
  );
};

export default SpecialOffer;
