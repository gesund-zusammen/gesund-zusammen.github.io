import React from "react";
import { Box, Grid } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import MuiMarkdown from "../common/MuiMarkdown";
import InfoBox from "../common/InfoBox";

import CountryInitiatives from "../common/CountryInitiatives";
import ContentDE from "../../data/landing/landing_de.md";
import ContentEN from "../../data/landing/landing_en.md";
import ContentFR from "../../data/landing/landing_fr.md";
import ContentIT from "../../data/landing/landing_it.md";
import ContentES from "../../data/landing/landing_es.md";

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
          <Box marginTop={4}>
            <Grid container spacing={4}>
              <InfoBox
                title={this.props.t("initiative.box1.title")}
                content={this.props.t("initiative.box1.content")}
              />
              <InfoBox
                title={this.props.t("initiative.box2.title")}
                content={this.props.t("initiative.box2.content")}
              />
              <InfoBox
                title={this.props.t("initiative.box3.title")}
                content={this.props.t("initiative.box3.content")}
              />
            </Grid>
          </Box>
        </Box>

        <CountryInitiatives />
      </>
    );
  };
}

export default withTranslation()(Landing);
