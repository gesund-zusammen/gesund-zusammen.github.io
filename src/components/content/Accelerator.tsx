import React from "react";
import { Box, Grid, Button, Typography } from "@material-ui/core";
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

import LogoFuturePerfect from "../../images/logo_future_perfect.svg";
import IlluCoworking from "../../images/illu_coworking.svg";
import IlluMobile from "../../images/illu_mobile.svg";
import IlluSupport from "../../images/illu_support.svg";

const AcceleratorLogo: AnyStyledComponent = styled.img`
  display: block;
  width: 500px;
  max-width: 100%;
  margin: 0 0 2rem 0;

  @media (min-width: 600px) {
    margin: 0 0 4rem 0;
  }
`;

const ContentGridItem: AnyStyledComponent = styled(Grid)`
  && {
    @media (min-width: 600px) {
      &:last-of-type {
        border-left: 1px solid #ced7db;
      }
    }
  }
`;

const LinkButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 15px;
    padding: 0.6rem 2rem;
    margin: 4rem auto 0;
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
        <AcceleratorLogo src={LogoFuturePerfect} />
        <Box id="accelerator" paddingBottom={4} marginTop={2}>
          <MuiMarkdown
            markdown={this.getMarkdown(this.props.i18n.language)}
            overrides={{
              ul: {
                component: Grid,
                props: {
                  container: true,
                  spacing: 8,
                },
              },
              li: {
                component: ContentGridItem,
                props: {
                  item: true,
                  xs: 12,
                  sm: 6,
                },
              },
              a: {
                component: LinkButton,
                props: {
                  color: "primary",
                  variant: "contained",
                  disableFocusRipple: true,
                },
              },
            }}
          />
        </Box>

        <Box paddingBottom={4} marginTop={8}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <InfoBox
                title={this.props.t("accelerator.box1.title")}
                content={this.props.t("accelerator.box1.content")}
                illustration={IlluCoworking}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InfoBox
                title={this.props.t("accelerator.box2.title")}
                content={this.props.t("accelerator.box2.content")}
                illustration={IlluMobile}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InfoBox
                title={this.props.t("accelerator.box3.title")}
                content={this.props.t("accelerator.box3.content")}
                illustration={IlluSupport}
              />
            </Grid>
          </Grid>
        </Box>

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
      </>
    );
  };
}

export default withTranslation()(Accelerator);
