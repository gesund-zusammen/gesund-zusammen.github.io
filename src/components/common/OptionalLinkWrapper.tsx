import React from "react";
import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";

interface IOptionalLinkWrapperProps {
  link?: string;
  targetBlank?: boolean;
}

class OptionalLinkWrapper extends React.PureComponent<
  IOptionalLinkWrapperProps,
  {}
> {
  isExternalLink = (url: string): boolean => {
    const domain = (url: string): string => {
      const domain = /https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i.exec(url);
      if (domain) {
        return domain[1];
      }
      return "";
    };

    return domain(location.href) !== domain(url);
  };

  render = () => {
    {
      return this.props.link ? (
        this.isExternalLink(this.props.link) ? (
          <StyledA
            href={this.props.link}
            {...{
              target: this.props.targetBlank && "blank",
              rel: this.props.targetBlank && "noopener noreferrer",
            }}
          >
            {this.props.children}
          </StyledA>
        ) : (
          <StyledLink to={this.props.link}>{this.props.children}</StyledLink>
        )
      ) : (
        this.props.children
      );
    }
  };
}

const StyledA: AnyStyledComponent = styled.a`
  text-decoration: none;
`;

const StyledLink: AnyStyledComponent = styled(Link)`
  text-decoration: none;
`;

export default OptionalLinkWrapper;
