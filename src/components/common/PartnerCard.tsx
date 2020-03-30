import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

interface IPartnerCardProps {
  image: string;
  name: string;
  link: string;
}

class PartnerCard extends React.PureComponent<IPartnerCardProps, {}> {
  render = () => {
    return (
      <Grid item xs={6} sm={3}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <PartnerCardWrapper elevation={2}>
            <PartnerCardContent
              style={{ backgroundImage: `url(${this.props.image})` }}
            >
              <PartnerName variant="caption">{this.props.name}</PartnerName>
            </PartnerCardContent>
          </PartnerCardWrapper>
        </a>
      </Grid>
    );
  };
}

const PartnerCardWrapper: AnyStyledComponent = styled(Card)`
  && {
    position: relative;
    text-align: center;

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
`;

const PartnerCardContent: AnyStyledComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center center;
`;

const PartnerName: AnyStyledComponent = styled(Typography)`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  color: #003269;
  font-size: 1.2rem;
  font-weight: normal;
`;

export default PartnerCard;
