import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import Initiative from "./Initiative";
import Faq from "./Faq";

import LandingPartnersImage from "../../images/landing_partners.png";
import BecomePart from "../common/BecomePart";

interface ILandingProps {
  lang: "de" | "en";
}

class Landing extends React.PureComponent<ILandingProps, {}> {
  render = () => {
    return (
      <>
        <Initiative lang={this.props.lang}></Initiative>
        <Box id="partners" paddingBottom={4} marginTop={4}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography variant="h2">Founding & Tech Partner</Typography>
              <Typography variant="body1">
                Zusammen stellen wir Ressourcen zur Verfuegung um Digitale Tools
                im Kampf gg Covid und anderen Epidemien zu unterstuetzen.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <LandingPartners
                src={LandingPartnersImage}
                alt="Partners"
              ></LandingPartners>
            </Grid>
          </Grid>
        </Box>
        <Box paddingBottom={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
        <Faq lang={this.props.lang}></Faq>
      </>
    );
  };
}

const LandingPartners: AnyStyledComponent = styled.img`
  width: 100%;
`;

export default Landing;
