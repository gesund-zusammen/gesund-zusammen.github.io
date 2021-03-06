import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import OptionalLinkWrapper from "./OptionalLinkWrapper";
import IconArrowRight from "../../images/icon_arrow_right.svg";

interface INewsCardProps {
  outlet: string;
  teaser: string;
  link: string;
  date?: string;
  locale?: string;
}

class NewsCard extends React.PureComponent<INewsCardProps, {}> {
  render = () => {
    return (
      <OptionalLinkWrapper link={this.props.link} targetBlank={true}>
        <NewsCardRoot>
          <NewsCardContent>
            {this.props.date && this.props.locale && (
              <Typography variant="overline" color="primary">
                {new Date(this.props.date).toLocaleDateString(
                  this.props.locale,
                )}
              </Typography>
            )}
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
    border-radius: 0px 0px 30px 0px;
    box-shadow: 10px 10px 20px rgba(26, 11, 61, 0.25);
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
