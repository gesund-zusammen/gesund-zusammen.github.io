import React from "react";
import { Box } from "@material-ui/core";

import Header from "./Header";
import LatestNews from "../Shared/LatestNews";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import NewsletterSignup from "../Shared/NewsletterSignup";

class LayoutLanding extends React.PureComponent {
  render = () => {
    return (
      <>
        <Box id="header" component="header">
          <Header />
        </Box>

        <Box id="content" paddingBottom={4} marginTop={4}>
          {this.props.children}
        </Box>

        <LatestNews />

        <NewsletterSignup />

        <Social />

        <Footer />
      </>
    );
  };
}

export default LayoutLanding;
