import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import Fade from "react-reveal";

import LogoComingSoon from "../../images/coming_soon_mobile.svg";
import ProjectCard from "./ProjectCard";

class Projects extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <Box id="partners" paddingBottom={4} marginTop={4}>
        <Fade right cascade>
          <Typography variant="h2">
            {this.props.t("program.type.companies")}
          </Typography>
          <Box paddingTop={4} paddingBottom={4}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <ProjectCard name="Coming soon" image={LogoComingSoon} />
            </Grid>
          </Box>
        </Fade>
      </Box>
    );
  };
}

export default withTranslation()(Projects);
