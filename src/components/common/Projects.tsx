import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import Fade from "react-reveal";

import LogoAncora from "../../images/partners/ancora.svg";
import LogoEverstox from "../../images/partners/everstox.png";
import LogoExclamo from "../../images/partners/exclamo.svg";
import LogoVoize from "../../images/partners/voize.png";

import ProjectCard from "./ProjectCard";

class Projects extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Fade right cascade fraction={0.01}>
          <Typography variant="h2" color="secondary">
            {this.props.t("program.companies")}
          </Typography>
          <Box paddingTop={4} paddingBottom={4}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <ProjectCard
                name="Ancora"
                image={LogoAncora}
                link="https://www.ancora.ai/"
              />
              <ProjectCard
                name="Everstox"
                image={LogoEverstox}
                link="https://everstox.com/"
              />
              <ProjectCard
                name="Exclamo"
                image={LogoExclamo}
                link="https://exclamo.org/"
              />
              <ProjectCard
                name="Voize"
                image={LogoVoize}
                link="https://voize.de/"
              />
            </Grid>
          </Box>
        </Fade>
      </Box>
    );
  };
}

export default withTranslation()(Projects);
