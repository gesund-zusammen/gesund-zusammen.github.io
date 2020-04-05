import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import CTABox from "../common/CTABox";
import Projects from "./Projects";

class Accelerator extends React.Component<WithTranslation, {}> {
  render = () => {
    return (
      <Box paddingBottom={4}>
        <Typography variant="h3">
          {this.props.t("accelerator.title")}
        </Typography>
        <Typography variant="body1">
          {this.props.t("accelerator.content")}
        </Typography>

        <Projects />

        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("accelerator.claim")}
            cta={this.props.t("accelerator.cta")}
            href={this.props.t("accelerator.link")}
          />
        </Box>
      </Box>
    );
  };
}

export default withTranslation()(Accelerator);
