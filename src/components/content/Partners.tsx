import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

import LogoOmio from "../../images/partners/omio.png";
import LogoBVDS from "../../images/partners/bvds.png";
import LogoWefox from "../../images/partners/wefox.png";
import LogoN26 from "../../images/partners/n26.png";
import LogoFinleap from "../../images/partners/finleap.png";
import LogoGetYourGuide from "../../images/partners/getyourguide.png";
import LogoFreightHub from "../../images/partners/freighthub.png";
import LogoDeliveryHero from "../../images/partners/deliveryhero.png";
import LogoCelonis from "../../images/partners/celonis.png";
import LogoAuto1 from "../../images/partners/auto1.png";
import LogoAdaHealth from "../../images/partners/adahealth.png";
import LogoViaHealth from "../../images/partners/viadata.svg";
import LogoPersonio from "../../images/partners/personio.png";
import LogoMrSpex from "../../images/partners/mrspex.png";
import LogoDatenschutzExperte from "../../images/partners/datenschutzexperte.svg";
import LogoOneFootball from "../../images/partners/onefootball.svg";
import LogoIoniq from "../../images/partners/ioniq.svg";
import LogoHelloFresh from "../../images/partners/hellofresh.svg";

interface IPartnersProps {
  lang: "de" | "en";
}

class Partners extends React.PureComponent<IPartnersProps, {}> {
  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Typography variant="h2">Founding & Tech Partner</Typography>
        <Box paddingTop={4}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={6} sm={3}>
              <a href="https://www.finleap.com">
                <PartnerLogo src={LogoFinleap}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.omio.com">
                <PartnerLogo src={LogoOmio}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.deutschestartups.org/">
                <PartnerLogo src={LogoBVDS}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.wefox.de/">
                <PartnerLogo src={LogoWefox}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.n26.de/">
                <PartnerLogo src={LogoN26}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.getyourguide.com/">
                <PartnerLogo src={LogoGetYourGuide}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.freighthub.com/">
                <PartnerLogo src={LogoFreightHub}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.deliveryhero.com/">
                <PartnerLogo src={LogoDeliveryHero}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.celonis.com/">
                <PartnerLogo src={LogoCelonis}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.auto1.com/">
                <PartnerLogo src={LogoAuto1}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://ada.com/de/">
                <PartnerLogo src={LogoAdaHealth}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.viadata.io/">
                <PartnerLogo src={LogoViaHealth}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.personio.de/">
                <PartnerLogo src={LogoPersonio}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.misterspex.de/">
                <PartnerLogo src={LogoMrSpex}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.datenschutzexperte.de/">
                <PartnerLogo src={LogoDatenschutzExperte}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://onefootball.com/">
                <PartnerLogo src={LogoOneFootball}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://ioniq.com/">
                <PartnerLogo src={LogoIoniq}></PartnerLogo>
              </a>
            </Grid>
            <Grid item xs={6} sm={3}>
              <a href="https://www.hellofresh.com/">
                <PartnerLogo src={LogoHelloFresh}></PartnerLogo>
              </a>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <PartnerButton
                color="secondary"
                variant="contained"
                disableFocusRipple={true}
              >
                {translated(this.props.lang).partners.button}
              </PartnerButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
}

const PartnerLogo: AnyStyledComponent = styled.img`
  display: block;
  max-height: 6rem;
  max-width: 100%;
  margin: 0 auto;
`;

const PartnerButton: AnyStyledComponent = styled(Button)`
  && {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: none;
    padding: 1rem 5rem;
    border-radius: 15px;
  }
`;

export default Partners;
