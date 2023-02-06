import React from "react";
import CompanyHelp from "../components/LandingPage/CompanyHelp";
import EstateClosure from "../components/LandingPage/EstateClosure";
import FreeInformation from "../components/LandingPage/FreeInformation";
import FreeTrial from "../components/LandingPage/FreeTrial";
import InvestInPeace from "../components/LandingPage/InvestInPeace";
import Need from "../components/LandingPage/Need";
import PeaceOfMind from "../components/LandingPage/PeaceOfMind";
import SpecialOffer from "../components/LandingPage/SpecialOffer";

const LandingPage = () => {
  return (
    <>
      <FreeTrial />
      <PeaceOfMind/>
      <Need/>
      <EstateClosure/>
      <InvestInPeace/>
      <FreeInformation/>
      <CompanyHelp/>
      <SpecialOffer/>
    </>
  );
};

export default LandingPage;
