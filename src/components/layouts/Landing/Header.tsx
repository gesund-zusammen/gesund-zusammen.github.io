import React from "react";
import { Box, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../../util";

import HeaderNav from "../Shared/HeaderNav";

import IlluHeader from "../../../images/illu_header.svg";

interface ILandingHeaderProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
}

class LandingHeader extends React.PureComponent<ILandingHeaderProps, {}> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.langChangeCallback(lang);
  };

  render = () => {
    return (
      <>
        <Box paddingBottom={4} marginTop={4}>
          <HeaderNav
            lang={this.props.lang}
            langChangeCallback={this.handleLangChange}
          ></HeaderNav>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <HeaderContent>
                <Typography variant="h1" style={{ fontFamily: "inherit" }}>
                  {translated(this.props.lang).header.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontFamily: "inherit", color: "#ffffff" }}
                >
                  {translated(this.props.lang).header.content}
                </Typography>
                <Typography variant="caption" style={{ fontFamily: "inherit" }}>
                  {translated(this.props.lang).header.claim}
                </Typography>
              </HeaderContent>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <HeaderIllustration
                  src={IlluHeader}
                  alt="Patient 0"
                ></HeaderIllustration>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </>
    );
  };
}

const HeaderContent: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    margin: 4rem 0 6rem 0;
    padding-right: 4rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  width: 100%;
`;

export default LandingHeader;
