import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

interface ICardProps {
  image: string;
  name: string;
  link: string;
  color?: string;
  imageXL?: boolean;
  nameColorInverted?: boolean;
}

class ImageCard extends React.PureComponent<ICardProps, {}> {
  render = () => {
    return (
      <Grid item xs={6} sm={3}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <CardWrapper>
            <CardContent
              style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundColor: this.props.color,
                backgroundSize: this.props.imageXL ? "40% auto" : "80% auto",
              }}
            ></CardContent>
            <CardName
              variant="caption"
              className={this.props.nameColorInverted ? "inverted" : "regular"}
            >
              {this.props.name}
            </CardName>
          </CardWrapper>
        </a>
      </Grid>
    );
  };
}

const CardWrapper: AnyStyledComponent = styled(Card)`
  && {
    position: relative;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 1px 4px #e3e6eb;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 2px 24px #e3e6eb;
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
