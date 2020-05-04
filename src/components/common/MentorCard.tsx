import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import OptionalLinkWrapper from "./OptionalLinkWrapper";

interface IMentorCardProps {
  name: string;
  company?: string;
  job_title?: string;
  linkedin: string;
  photo?: string;
}

class MentorCard extends React.PureComponent<IMentorCardProps, {}> {
  render = () => {
    return (
      <Grid item xs={6} sm={3}>
        <OptionalLinkWrapper link={this.props.linkedin}>
          <MentorCardWrapper>
            <CardContent>
              <MentorImage
                style={
                  this.props.photo
                    ? {
                        backgroundImage: `url(${
                          require(`../../images/mentors/${this.props.photo}`)
                            .default
                        })`,
                      }
                    : {
                        backgroundImage: `url(${
                          require(`../../images/avatar.png`).default
                        })`,
                      }
                }
              />
              <Typography variant="h6">{this.props.name}</Typography>
              {this.props.job_title && (
                <Typography variant="subtitle2">
                  {this.props.job_title}
                </Typography>
              )}
              {this.props.company && (
                <Typography variant="subtitle1">
                  {this.props.company}
                </Typography>
              )}
            </CardContent>
          </MentorCardWrapper>
        </OptionalLinkWrapper>
      </Grid>
    );
  };
}

const MentorCardWrapper: AnyStyledComponent = styled(Card)`
  && {
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 1px 4px #e3e6eb;

    &:hover {
      box-shadow: 0px 2px 24px #e3e6eb;
    }
  }
`;

const MentorImage: AnyStyledComponent = styled.div`
  display: block;
  width: 100%;
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  margin: 0 0 1rem 0;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default MentorCard;
