import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import OptionalLinkWrapper from "./OptionalLinkWrapper";

interface ICardProps {
  image: string;
  name: string;
  link?: string;
  color?: string;
  imageXL?: boolean;
  nameColorInverted?: boolean;
}

class ImageCard extends React.PureComponent<ICardProps, {}> {
  render = () => {
    return (
      <Grid item xs={6} sm={3}>
        <OptionalLinkWrapper link={this.props.link} targetBlank={true}>
          <CardWrapper>
            <CardContent
              style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundColor: this.props.color,
                backgroundSize: this.props.imageXL ? "50% auto" : "80% auto",
              }}
            ></CardContent>
            <CardName
              variant="caption"
              className={this.props.nameColorInverted ? "inverted" : "regular"}
            >
              {this.props.name}
            </CardName>
          </CardWrapper>
        </OptionalLinkWrapper>
      </Grid>
    );
  };
}

const CardWrapper: AnyStyledComponent = styled(Card)`
  && {
    position: relative;
    text-align: center;
    border-radius: 15px;
    box-shadow: 6px 6px 14px rgba(26, 11, 61, 0.25);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 12px 12px 20px rgba(26, 11, 61, 0.25);
    }

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
`;

const CardContent: AnyStyledComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 40%;
`;

const CardName: AnyStyledComponent = styled(Typography)`
  && {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    color: #003269;
    font-size: 1rem;
    font-weight: normal;

    &.inverted {
      color: #ffffff;
    }

    @media (min-width: 600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export default ImageCard;
