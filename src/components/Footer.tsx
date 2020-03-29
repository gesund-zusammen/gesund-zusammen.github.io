import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../util";

import Logo from "../images/logo.svg";
import LogoFinleap from "../images/logo_finleap.svg";
import LogoVia from "../images/logo_via.svg";
import LogoWefox from "../images/logo_wefox.svg";

interface IFooterProps {
  lang: "de" | "en";
}

class Footer extends React.PureComponent<IFooterProps, {}> {
  render = () => {
    return (
      <>
        <Typography variant="h3">
          {translated(this.props.lang).footer.title}
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <img src={LogoFinleap}></img>
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <img src={LogoWefox}></img>
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <img src={LogoVia}></img>
          </Grid>
        </Grid>
        <Button color="secondary" disableFocusRipple={true}>
          {translated(this.props.lang).footer.button}
        </Button>
        <FooterNav>
          <img src={Logo} alt="#GesundZusammen"></img>
        </FooterNav>
      </>
    );
  };
}

const FooterNav: AnyStyledComponent = styled.div`
  display: block;
  padding: 2rem 0;
  margin: 3rem 0 0 0;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
`;

export default Footer;
