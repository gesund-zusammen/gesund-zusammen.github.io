import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import OptionalLinkWrapper from "../common/OptionalLinkWrapper";
import SquaredImage from "../common/SquaredImage";

interface IInfoBoxProps {
  title: string;
  content: string;
  link?: string;
  illustration?: string;
  ctaText?: string;
}

class InfoBox extends React.PureComponent<IInfoBoxProps, {}> {
  render = () => {
    return (
      <OptionalLinkWrapper link={this.props.link}>
        <StyledCard>
          <StyledCardContent>
            <StyledTitle variant="h4">{this.props.title}</StyledTitle>
            {this.props.illustration && (
              <SquaredImageWrapper>
                <SquaredImage imageSrc={this.props.illustration} />
              </SquaredImageWrapper>
            )}
            <Typography variant="body2">{this.props.content}</Typography>
            {this.props.ctaText && (
              <CTA variant="h6" className={!this.props.link && "disabled"}>
                {this.props.ctaText}
              </CTA>
            )}
          </StyledCardContent>
        </StyledCard>
      </OptionalLinkWrapper>
    );
  };
}

const StyledTitle: AnyStyledComponent = styled(Typography)`
  && {
    margin-bottom: 0.4rem;
  }
`;

const StyledCard: AnyStyledComponent = styled(Card)`
  && {
    height: 100%;
    border-radius: 0px 0px 70px 0px;
    box-shadow: 30px 30px 50px rgba(26, 11, 61, 0.25);
  }
`;

const StyledCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    text-align: center;
    padding: 1.5rem 2rem 2rem;

    &:last-child {
      padding-bottom: 2rem;
    }
  }
`;

const SquaredImageWrapper: AnyStyledComponent = styled.div`
  margin: 1rem 1rem 2rem;
`;

const CTA: AnyStyledComponent = styled(Typography)`
  && {
    color: #ffffff;
    background: #003269;
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 25px;
    user-select: none;

    &.disabled {
      background: rgba(0, 0, 0, 0.26);
    }
  }
`;

export default InfoBox;
