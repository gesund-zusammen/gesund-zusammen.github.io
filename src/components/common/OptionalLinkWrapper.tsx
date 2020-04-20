import React from "react";

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
        <a href={this.props.link} target="blank" rel="noopener noreferrer">
          {this.props.children}
        </a>
      ) : (
        <>{this.props.children}</>
      );
    }
  };
}

export default OptionalLinkWrapper;
