import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import OptionalLinkWrapper from "./OptionalLinkWrapper";
import IconArrowRight from "../../images/icon_arrow_right.svg";

interface INewsCardProps {
  outlet: string;
  teaser: string;
  link: string;
}

class NewsCard extends React.PureComponent<INewsCardProps, {}> {
  render = () => {
    return (
      <OptionalLinkWrapper link={this.props.link}>
        <NewsCardRoot>
          <NewsCardContent>
            <Typography variant="h5" color="secondary">
              {this.props.outlet}
            </Typography>
            <NewsCardTitle variant="body1" color="primary">
              &quot;{this.props.teaser}&quot;
            </NewsCardTitle>
          </NewsCardContent>
        </NewsCardRoot>
      </OptionalLinkWrapper>
    );
  };
}

const NewsCardRoot: AnyStyledComponent = styled(Card)`
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

const NewsCardTitle: AnyStyledComponent = styled(Typography)`
  && {
    margin-top: 0.5rem;
    margin-bottom: 0.7rem;
    line-height: 1.4;
  }
`;

const NewsCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    max-width: 680px;
  }
`;

export default NewsCard;
