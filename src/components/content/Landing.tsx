import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import InfoBox from "../common/InfoBox";
import Partners from "./Partners";
import Markdown from "markdown-to-jsx";
import ContentDE from "../../data/landing/landing_de.md";
import ContentEN from "../../data/landing/landing_en.md";
import styled, { AnyStyledComponent } from "styled-components";

class Landing extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="initiative" paddingBottom={4} marginTop={4}>
          <Markdown
            options={{
              overrides: {
                p: {
                  component: Typography,
                  props: {
                    variant: "body1",
                  },
                },
              },
            }}
          >
            {this.props.i18n.language === "de" ? ContentDE : ContentEN}
          </Markdown>
          <Box marginTop={4}>
            <Grid container spacing={4}>
              <InfoBox
                title={this.props.t("boxes.initiative.title")}
                content={this.props.t("boxes.initiative.content")}
              />
              <InfoBox
                title={this.props.t("boxes.support.title")}
                content={this.props.t("boxes.support.content")}
              />
              <InfoBox
                title={this.props.t("boxes.ecosystem.title")}
                content={this.props.t("boxes.ecosystem.content")}
              />
            </Grid>
          </Box>
        </Box>

        <Partners />
      </>
    );
  };
}

export default withTranslation()(Landing);
