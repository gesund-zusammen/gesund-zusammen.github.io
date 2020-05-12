import React from "react";
import { Box, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import MuiMarkdown from "../common/MuiMarkdown";
import InfoBox from "../common/InfoBox";
import PartnerItems from "../common/PartnerItems";

import InitiativePartners from "../../data/partners_initiative.json";

import ContentDE from "../../data/landing/landing_de.md";
import ContentEN from "../../data/landing/landing_en.md";
import ContentFR from "../../data/landing/landing_fr.md";
import ContentIT from "../../data/landing/landing_it.md";
import ContentES from "../../data/landing/landing_es.md";

import IlluAccelerator from "../../images/illu_accelerator.svg";
import IlluApp from "../../images/illu_app.svg";
import IlluInitiative from "../../images/illu_initiative.svg";

const FunkyBox: AnyStyledComponent = styled(Box)`
  && {
    position: relative;
  }
  & > .background {
    display: none;

    @media (min-width: 600px) {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 50%;
      height: 100%;
      background: #0a6eaa;
    }
  }
`;

const SuperFunkyBox: AnyStyledComponent = styled(Box)`
  && {
    position: relative;
  }
  & > .background {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: block;
    width: 90%;
    height: 100%;
    background: #0a6eaa;
    border-radius: 0 0 400px 0;

    @media (min-width: 600px) {
      width: 50%;
    }
  }
`;

const FunkyGrid: AnyStyledComponent = styled(Grid)`
  && {
    &:first-of-type {
      @media (min-width: 600px) {
        & > * {
          color: #ffffff;
        }

        & > h3 {
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #00aac8;
        }
      }
    }
  }
`;

class Start extends React.PureComponent<WithTranslation, {}> {
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
        <Hidden xsDown>
          <Container maxWidth="lg">
            <Box paddingBottom={2}>
              <Typography variant="h2">Who are we?</Typography>
            </Box>
          </Container>
        </Hidden>

        <FunkyBox>
          <div className="background" />
          <Container maxWidth="lg">
            <Box id="landing" paddingBottom={4} marginTop={4}>
              <MuiMarkdown
                markdown={this.getMarkdown(this.props.i18n.language)}
                overrides={{
                  ul: {
                    component: Grid,
                    props: {
                      container: true,
                      spacing: 6,
                    },
                  },
                  li: {
                    component: FunkyGrid,
                    props: {
                      item: true,
                      xs: 12,
                      sm: 6,
                    },
                  },
                }}
              ></MuiMarkdown>
            </Box>
          </Container>
        </FunkyBox>
        <SuperFunkyBox>
          <div className="background" />
          <Container maxWidth="lg">
            <Box paddingBottom={4}>
              <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <InfoBox
                    link={`/${this.props.i18n.language}/initiative`}
                    title={this.props.t("start.box1.title")}
                    content={this.props.t("start.box1.content")}
                    illustration={IlluInitiative}
                    ctaText={this.props.t("start.box1.cta")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <InfoBox
                    link={`/${this.props.i18n.language}/accelerator`}
                    title={this.props.t("start.box3.title")}
                    content={this.props.t("start.box3.content")}
                    illustration={IlluAccelerator}
                    ctaText={this.props.t("start.box3.cta")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <InfoBox
                    title={this.props.t("start.box2.title")}
                    content={this.props.t("start.box2.content")}
                    illustration={IlluApp}
                    ctaText={this.props.t("start.box2.cta")}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </SuperFunkyBox>

        <Container maxWidth="lg">
          <Box id="founding-partners" paddingBottom={4} marginTop={10}>
            <PartnerItems
              data={InitiativePartners}
              categorySlug="founders"
              onlyCountryPartners={true}
            />
          </Box>
        </Container>
      </>
    );
  };
}

export default withTranslation()(Start);
