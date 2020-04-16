import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface ISquaredImageProps {
  imageSrc: string;
}

class SquaredImage extends React.PureComponent<ISquaredImageProps, {}> {
  render = () => {
    return (
      <SquaredImageRoot
        style={{ backgroundImage: `url(${this.props.imageSrc})` }}
      />
    );
  };
}

const SquaredImageRoot: AnyStyledComponent = styled.div`
  display: block;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default SquaredImage;
