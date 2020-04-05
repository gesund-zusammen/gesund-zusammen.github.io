import React from "react";
import { Box, Container } from "@material-ui/core";

import Footer from "../Shared/Footer";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";
import AcceleratorPageHeader from "./Header";

interface ILayoutAcceleratorPageProps {
  title: string;
  content: string;
}

class LayoutAcceleratorPage extends React.Component<
  ILayoutAcceleratorPageProps,
  {}
> {
  render = () => {
    return (
      <>
        <HeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <AcceleratorPageHeader
              title={this.props.title}
              content={this.props.content}
            />
          </Container>
        </HeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <Footer />
      </>
    );
  };
}

export default LayoutAcceleratorPage;
