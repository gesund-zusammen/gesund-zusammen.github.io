import React from "react";
import { Box, Container } from "@material-ui/core";

import SubPageHeader from "./Header";
import Footer from "../Shared/Footer";
import { HeaderBox, MainContentContainer } from "../Shared/StyledComponents";

interface ILayoutSubPageProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
  title: string;
  image?: string;
}

class LayoutSubPage extends React.Component<ILayoutSubPageProps, {}> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.langChangeCallback(lang);
  };

  render = () => {
    return (
      <>
        <HeaderBox id="header" component="header">
          <Container maxWidth="lg">
            <SubPageHeader
              lang={this.props.lang}
              langChangeCallback={this.handleLangChange}
              title={this.props.title}
              image={this.props.image}
            ></SubPageHeader>
          </Container>
        </HeaderBox>

        <Box id="content" paddingBottom={4} marginTop={4}>
          <MainContentContainer maxWidth="lg">
            {this.props.children}
          </MainContentContainer>
        </Box>

        <Footer lang={this.props.lang}></Footer>
      </>
    );
  };
}

export default LayoutSubPage;
