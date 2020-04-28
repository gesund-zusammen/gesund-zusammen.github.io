import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import OptionalLinkWrapper from "./OptionalLinkWrapper";
import IconArrowRight from "../../images/icon_arrow_right.svg";

interface INewsCardProps {
  category: string;
  name: string;
  description: string;
  link: string;
}

class InitiativeCard extends React.PureComponent<INewsCardProps, {}> {
  render = () => {
    return (
      <OptionalLinkWrapper link={this.props.link}>
        <InitiativeCardRoot>
          <InitiativeCardContent>
            <Typography variant="subtitle2" color="secondary">
              {this.props.category}
            </Typography>
            <InitiativeCardTitle variant="h4" color="primary">
              {this.props.name}
            </InitiativeCardTitle>
            <Typography variant="body2" color="primary">
              {this.props.description}
            </Typography>
          </InitiativeCardContent>
        </InitiativeCardRoot>
      </OptionalLinkWrapper>
    );
  };
}

const InitiativeCardRoot: AnyStyledComponent = styled(Card)`
  && {
    border-radius: 15px;
    box-shadow: 0px 2px 24px #e3e6eb;
    margin-bottom: 2rem;
    padding: 0.8rem;

    @media (min-width: 600px) {
      padding: 2.2rem 6rem 2.2rem 2.2rem;

      &:hover {
        background-image: url(${IconArrowRight});
        background-position: right 2rem center;
        background-repeat: no-repeat;
      }
    }
  }
`;

const InitiativeCardTitle: AnyStyledComponent = styled(Typography)`
  && {
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
    line-height: 1.4;
  }
`;

const InitiativeCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    max-width: 680px;
  }
`;

export default InitiativeCard;
