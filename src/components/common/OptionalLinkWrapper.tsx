import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface IOptionalLinkWrapperProps {
  link?: string;
}

class OptionalLinkWrapper extends React.PureComponent<
  IOptionalLinkWrapperProps,
  {}
> {
  render = () => {
    {
      return this.props.link ? (
        <StyledLink
          href={this.props.link}
          target="blank"
          rel="noopener noreferrer"
        >
          {this.props.children}
        </StyledLink>
      ) : (
        <>{this.props.children}</>
      );
    }
  };
}

const StyledLink: AnyStyledComponent = styled.a`
  text-decoration: none;
`;

export default OptionalLinkWrapper;
