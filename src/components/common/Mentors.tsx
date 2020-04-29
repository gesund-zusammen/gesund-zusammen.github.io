import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import Fade from "react-reveal";

import MentorCard from "./MentorCard";

import MentorData from "../../data/mentors.json";

interface IMentor {
  name: string;
  company?: string;
  job_title?: string;
  linkedin: string;
  photo?: string;
}

class Mentors extends React.PureComponent<WithTranslation, {}> {
  mentors: IMentor[];

  constructor(props: WithTranslation) {
    super(props);
    this.mentors = MentorData;
  }

  render = () => {
    return (
      <Box id="mentors" paddingBottom={4} marginTop={4}>
        <Fade right cascade>
          <Typography variant="h2">
            {this.props.t("program.mentors")}
          </Typography>
          <Box paddingTop={4} paddingBottom={4}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
              spacing={4}
            >
              {this.mentors.map(mentor => (
                <MentorCard
                  key={encodeURI(mentor.name.toLowerCase())}
                  {...mentor}
                />
              ))}
            </Grid>
          </Box>
        </Fade>
      </Box>
    );
  };
}

export default withTranslation()(Mentors);
