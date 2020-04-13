import React from "react";
import { Box, Typography, Grid, Hidden, Button } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import HeaderNav from "../Shared/HeaderNav";

import IlluHeader from "../../../images/illu_header.svg";

class AcceleratorHeader extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box paddingBottom={4} marginTop={4}>
          <HeaderNav />
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <HeaderContent>
                <Typography
                  variant="h1"
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {this.props.t("accelerator.landing.title")}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "inherit",
                    color: "#ffffff",
                    whiteSpace: "pre-line",
                  }}
                >
                  {this.props.t("accelerator.landing.content")}
                </Typography>
                <ApplyButton
                  color="primary"
                  variant="contained"
                  disableFocusRipple={true}
                  href={this.props.t("program.link")}
                >
                  {this.props.t("program.cta")}
                </ApplyButton>
              </HeaderContent>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <HeaderIllustration src={IlluHeader} alt="Patient 0" />
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </>
    );
  };
}

const ApplyButton: AnyStyledComponent = styled(Button)`
  && {
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    padding-right: 2rem;
    padding-left: 2rem;

    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
  }
`;

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

export default withTranslation()(AcceleratorHeader);
