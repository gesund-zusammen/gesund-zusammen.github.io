import React from "react";
import { Box, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import HeaderNav from "../../HeaderNav";

interface ISubPageHeaderProps {
  lang: "de" | "en";
  langChangeCallback: (lang: "de" | "en") => void;
  title: string;
  image?: string;
}

class SubPageHeader extends React.PureComponent<ISubPageHeaderProps, {}> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.langChangeCallback(lang);
  };

  render = () => {
    return (
      <>
        <Box paddingBottom={4} marginTop={4}>
          <HeaderNav
            lang={this.props.lang}
            langChangeCallback={this.handleLangChange}
          ></HeaderNav>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <HeaderContent>
                <Typography variant="h1" style={{ fontFamily: "inherit" }}>
                  {this.props.title}
                </Typography>
              </HeaderContent>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <HeaderIllustration
                  src={this.props.image}
                  alt="Patient 0"
                ></HeaderIllustration>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </>
    );
  };
}

const HeaderContent: AnyStyledComponent = styled.div`
  @media (min-width: 600px) {
    margin-top: 6rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  width: 100%;
`;

export default SubPageHeader;
