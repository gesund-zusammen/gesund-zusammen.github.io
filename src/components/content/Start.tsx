import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import MuiMarkdown from "../common/MuiMarkdown";
import InfoBox from "../common/InfoBox";
import PartnerItems from "../common/PartnerItems";

import ContentDE from "../../data/landing/landing_de.md";
import ContentEN from "../../data/landing/landing_en.md";
import ContentFR from "../../data/landing/landing_fr.md";
import ContentIT from "../../data/landing/landing_it.md";
import ContentES from "../../data/landing/landing_es.md";

import IlluAccelerator from "../../images/illu_accelerator.svg";
import IlluApp from "../../images/illu_app.svg";
import IlluInitiative from "../../images/illu_initiative.svg";

class Landing extends React.PureComponent<WithTranslation, {}> {
  getMarkdown(language: string) {
    switch (language) {
      case "de":
        return ContentDE;
      case "fr":
        return ContentFR;
      case "it":
        return ContentIT;
      case "es":
        return ContentES;
      default:
        return ContentEN;
    }
  }

  render = () => {
    return (
      <>
        <Box id="landing" paddingBottom={4} marginTop={4}>
          <MuiMarkdown
            markdown={this.getMarkdown(this.props.i18n.language)}
          ></MuiMarkdown>
        </Box>

        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <StyledLink to={`/${this.props.i18n.language}/initiative`}>
                <InfoBox
                  title={this.props.t("start.box1.title")}
                  content={this.props.t("start.box1.content")}
                  illustration={IlluInitiative}
                />
              </StyledLink>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <ExternalLink
                href={`https://ichhabs.app`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InfoBox
                  title={this.props.t("start.box2.title")}
                  content={this.props.t("start.box2.content")}
                  illustration={IlluApp}
                />
              </ExternalLink>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <StyledLink to={`/${this.props.i18n.language}/accelerator`}>
                <InfoBox
                  title={this.props.t("start.box3.title")}
                  content={this.props.t("start.box3.content")}
                  illustration={IlluAccelerator}
                />
              </StyledLink>
            </Grid>
          </Grid>
        </Box>

        <Box id="founding-partners" paddingBottom={4} marginTop={4}>
          <PartnerItems categorySlug={"founders"} />
        </Box>
      </>
    );
  };
}

const StyledLink: AnyStyledComponent = styled(Link)`
  text-decoration: none;
`;

const ExternalLink: AnyStyledComponent = styled.a`
  text-decoration: none;
`;

export default withTranslation()(Landing);
