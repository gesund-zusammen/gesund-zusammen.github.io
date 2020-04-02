import React from "react";
import { Box, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import HeaderNav from "../Shared/HeaderNav";

import IlluHeader from "../../../images/illu_header.svg";

interface ILandingHeaderProps extends WithTranslation {
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
          <HeaderNav langChangeCallback={this.handleLangChange}></HeaderNav>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <HeaderContent>
                <Typography
                  variant="h1"
                  dangerouslySetInnerHTML={{
                    __html: this.props.t("header.content.landing.title"),
                  }}
                ></Typography>
                <Typography
                  variant="body1"
                  style={{ fontFamily: "inherit", color: "#ffffff" }}
                >
                  {this.props.t("header.content.landing.content")}
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

export default withTranslation()(LandingHeader);
