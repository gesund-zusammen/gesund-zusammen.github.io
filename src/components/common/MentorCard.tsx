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
        <OptionalLinkWrapper link={this.props.linkedin} targetBlank={true}>
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
              <Typography variant="h6" color="primary">
                {this.props.name}
              </Typography>
              {this.props.job_title && (
                <Typography variant="subtitle2">
                  {this.props.job_title}
                </Typography>
              )}
              {this.props.company && (
                <Typography variant="subtitle1" color="secondary">
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
    border-radius: 0 0 25px 0;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 6px 6px 14px rgba(26, 11, 61, 0.25);
    }
  }
`;

const MentorImage: AnyStyledComponent = styled.div`
  display: block;
  width: 100%;
  border-radius: 0 0 15px 0;
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
