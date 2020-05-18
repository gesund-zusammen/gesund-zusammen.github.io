import React from "react";
import { Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import SubPageHeader from "./Header";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import { MainContentContainer } from "../Shared/StyledComponents";

const MainContentBox: AnyStyledComponent = styled(Box)`
  && {
    overflow-x: hidden;
    margin-top: 64px;
    padding-bottom: 48px;
  }
`;

interface ILayoutSubPageProps {
  title: string;
  image?: string;
}

class LayoutSubPage extends React.PureComponent<ILayoutSubPageProps, {}> {
  render = () => {
    return (
      <>
        <SubPageHeader title={this.props.title} image={this.props.image} />

        <MainContentBox id="content">
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </MainContentBox>

        <Social />

        <Footer />
      </>
    );
  };
}

export default LayoutSubPage;
