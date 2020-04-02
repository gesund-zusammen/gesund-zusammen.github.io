import React from "react";
import { Box, Typography, Avatar, Grid, Link } from "@material-ui/core";
import { Email, GetApp } from "@material-ui/icons";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import CTABox from "../common/CTABox";

import PressContactPhoto from "../../images/solveig_rathenow.png";
import PressKitLogo from "../../images/presskit_logo.svg";
import ReleaseEnLogo from "../../../public/187535-20200401090251000000000-gesund-zusammen-tech-coalition-formed-to-.png";
import ReleaseDeLogo from "../../../public/187534-20200401090213000000000-gesund-zusammen-die-digitale-wirtschaft-s.png";

class PressContact extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <PressContactWrapper paddingBottom={4}>
          <Typography variant="h2">
            {this.props.t("press.pageHeader")}
          </Typography>
          <Grid container spacing={5} justify="flex-start" alignItems="center">
            <Grid item xs={12} sm={4}>
              <StyledAvatar alt="Solveig Ratenow" src={PressContactPhoto} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1">
                {this.props.t("press.pressContactTitle")}
              </Typography>
              <Typography variant="h4" color="primary">
                {this.props.t("press.pressContactName")}
              </Typography>
              <Typography variant="body1">
                <StyledEmailIcon color="primary" fontSize="small" />
                {this.props.t("press.pressContactEmail")}
              </Typography>
            </Grid>
          </Grid>
          <Box
            paddingBottom={4}
            paddingTop={8}
            marginTop={8}
            style={{ borderTop: "1px solid #CED7DB" }}
          >
            <Typography variant="h2">
              {this.props.t("press.resources")}
            </Typography>
            <Typography variant="body2" color="primary">
              {this.props.t("press.resourcesLine1")}
            </Typography>
            <Link href="/PressKit.zip">
              <StyledPressKitImage src={PressKitLogo} />
            </Link>
            <Typography variant="body2" color="primary">
              {this.props.t("press.resourcesLine2")}
            </Typography>
            <StyledDownloadLink href="/PressKit.zip">
              <Typography variant="body2" color="primary">
                <StyledDownloadButton color="primary" fontSize="small" />
                {this.props.t("press.downloadLogo")}
              </Typography>
            </StyledDownloadLink>
          </Box>
          <Box
            paddingBottom={4}
            paddingTop={8}
            marginTop={8}
            style={{ borderTop: "1px solid #CED7DB" }}
          >
            <Typography variant="h2">
              {this.props.t("press.release")}
            </Typography>
            <Typography variant="body1" color="primary">
              {this.props.t("press.releaseLine1")}
            </Typography>
            <Typography variant="body2">
              <Link href={this.props.t("press.releaseHrefURL")}>
                {"Link: " + this.props.t("press.releaseTitle")}
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href={this.props.t("press.releaseHrefPDF")}>
                {"PDF: " + this.props.t("press.releaseTitle")}
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href={this.props.t("press.releaseHrefImage")}>
                {"PNG: " + this.props.t("press.downloadLogo")}
              </Link>
            </Typography>
            <Link href={this.props.t("press.releaseHrefImage")}>
              <StyledPressReleaseImage
                src={
                  this.props.i18n.language == "de"
                    ? ReleaseDeLogo
                    : ReleaseEnLogo
                }
              />
            </Link>
          </Box>
        </PressContactWrapper>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("press.claim")}
            cta={this.props.t("press.cta")}
            href={this.props.t("press.link")}
          />
        </Box>
      </>
    );
  };
}

const PressContactWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 600px) {
      padding-right: 16rem;
    }
  }
`;

const StyledAvatar: AnyStyledComponent = styled(Avatar)`
  border: 8px solid rgba(0, 170, 200, 0.3);
`;

const StyledEmailIcon: AnyStyledComponent = styled(Email)`
  && {
    margin: 0.3rem 0.5rem 0 0;
    float: left;
  }
`;

const StyledDownloadLink: AnyStyledComponent = styled(Link)`
  && {
    display: inline-block;
    margin-top: 1rem;
  }
`;

const StyledDownloadButton: AnyStyledComponent = styled(GetApp)`
  && {
    margin: 0.2rem 0.5rem 0 0;
    float: left;
  }
`;

const StyledPressReleaseImage: AnyStyledComponent = styled.img`
  margin: 2rem 0;
  max-width: 368px;
`;

const StyledPressKitImage: AnyStyledComponent = styled.img`
  margin: 2rem 0;
  max-width: 100%;
`;

export default withTranslation()(PressContact);
