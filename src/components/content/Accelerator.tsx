import React from "react";
import { Box, Container, Grid, Button, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import MuiMarkdown from "../common/MuiMarkdown";
import InfoBox from "../common/InfoBox";
import CTABox from "../common/CTABox";
import PartnerItems from "../common/PartnerItems";

import AcceleratorPartners from "../../data/partners_accelerator.json";

import ContentDE from "../../data/accelerator/accelerator_de.md";
import ContentEN from "../../data/accelerator/accelerator_en.md";
import ContentFR from "../../data/accelerator/accelerator_fr.md";
import ContentIT from "../../data/accelerator/accelerator_it.md";
import ContentES from "../../data/accelerator/accelerator_es.md";

import LiBulletIcon from "../../images/li_bullet_icon.svg";

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
      background: #e1e1e1;
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
    width: 70%;
    height: 100%;
    background: #e1e1e1;
    border-radius: 0 0 100px 0;

    @media (min-width: 600px) {
      width: 50%;
      border-radius: 0 0 400px 0;
    }
  }
`;

const LinkButton: AnyStyledComponent = styled(Button)`
  && {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: none;
    text-align: center;
    color: #00aac8;
    background: transparent;
    border: 3px solid #00aac8;
    border-radius: 25px;
    padding: 0.6rem 4rem;
    margin: 2rem auto 0;
    box-shadow: none;
  }
`;

const FunkyGrid: AnyStyledComponent = styled(Grid)`
  && {
    &:nth-of-type(2) {
      & > h6 {
        padding-left: 2rem;
        background: url(${LiBulletIcon}) no-repeat;
        background-position: left top 4px;
      }
      & > p {
        padding-left: 2rem;
      }
    }
  }
`;

class Accelerator extends React.PureComponent<WithTranslation, {}> {
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
        <Container maxWidth="lg">
          <Box paddingBottom={1}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2" color="primary">
                  {this.props.t("accelerator.title")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>

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
                  a: {
                    component: LinkButton,
                    props: {
                      variant: "contained",
                      disableFocusRipple: true,
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
            <Box paddingBottom={6}>
              <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <InfoBox
                    title={this.props.t("accelerator.box1.title")}
                    content={this.props.t("accelerator.box1.content")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InfoBox
                    title={this.props.t("accelerator.box2.title")}
                    content={this.props.t("accelerator.box2.content")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InfoBox
                    title={this.props.t("accelerator.box3.title")}
                    content={this.props.t("accelerator.box3.content")}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </SuperFunkyBox>

        <Container maxWidth="lg">
          <Box id="partners" paddingBottom={4} marginTop={4}>
            <Typography variant="h2" color="primary">
              {this.props.t("partners.header")}
            </Typography>
            <PartnerItems data={AcceleratorPartners} />
          </Box>

          <Box paddingBottom={4} marginTop={4}>
            <CTABox
              claim={this.props.t("accelerator.ctaBox.claim")}
              cta={this.props.t("accelerator.ctaBox.cta")}
              href={this.props.t("accelerator.ctaBox.link")}
            />
          </Box>
        </Container>
      </>
    );
  };
}

export default withTranslation()(Accelerator);
