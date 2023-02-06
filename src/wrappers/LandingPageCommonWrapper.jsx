import { Box } from "@mui/material";
import { styled } from "@mui/system";

const LandingPageCommonWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0px",
  borderRadius: "2px",
  boxShadow: '0px -4px 10px gray, 4px -4px 4px gray, -4px -4px 11px gray'
});

export default LandingPageCommonWrapper;
