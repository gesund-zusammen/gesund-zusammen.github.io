import React from "react";
import { Box, Container } from "@material-ui/core";

import SubPageHeader from "./Header";
import Footer from "../Shared/Footer";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

interface ILayoutSubPageProps {
  title: string;
  image?: string;
}

class LayoutSubPage extends React.Component<ILayoutSubPageProps, {}> {
  render = () => {
    return (
      <>
        <HeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <SubPageHeader title={this.props.title} image={this.props.image} />
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

export default LayoutSubPage;
