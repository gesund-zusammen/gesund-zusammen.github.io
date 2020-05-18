import React from "react";
import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import HeaderNav from "../Shared/HeaderNav";
import Social from "../Shared/Social";
import Footer from "../Shared/Footer";
import { MainContentContainer } from "../Shared/StyledComponents";

import IlluHeader from "../../../images/illu_header_initiative.svg";

const SuperFunkyBox: AnyStyledComponent = styled(Box)`
  && {
    position: relative;
    padding-top: 2rem;
  }
  & > .background {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    display: block;
    width: 70%;
    height: 100%;
    background: #00aac8;
    border-radius: 0 0 0 50px;
    box-shadow: 30px 30px 50px rgba(26, 11, 61, 0.25);

    @media (min-width: 600px) {
      width: 100%;
      border-radius: 0 0 200px 0;
    }
  }
`;

const FunkyMobileGridItem: AnyStyledComponent = styled(Grid)`
  && {
    position: relative;
    padding-bottom: 0 !important;

    @media (max-width: 599px) {
      margin-bottom: 1rem;

      & > .background {
        position: absolute;
        right: -8px;
        top: 0;
        z-index: -1;
        display: block;
        width: 80%;
        height: 100%;
        background: #00aac8;
        border-radius: 200px 0 0 200px;
        box-shadow: 30px 30px 50px rgba(26, 11, 61, 0.25);
      }
    }
  }
`;

const HeaderContent: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    color: #ffffff;
    margin: 4rem 0 2rem 0;
    padding-right: 10rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  position: relative;
  width: 70%;
  float: right;

  @media (min-width: 600px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    margin-right: 120px;
  }
`;

const MainContentBox: AnyStyledComponent = styled(Box)`
  && {
    overflow-x: hidden;
    margin-top: 64px;
    padding-bottom: 48px;
  }
`;

interface ILayoutInitiativePageProps {
  title: string;
  content: string;
}

class LayoutInitiativePage extends React.PureComponent<
  ILayoutInitiativePageProps,
  {}
> {
  render = () => {
    return (
      <>
        <Box id="header" component="header">
          <SuperFunkyBox>
            <Hidden xsDown>
              <div className="background" />
            </Hidden>

            <Container maxWidth="lg">
              <Box>
                <HeaderNav />
              </Box>
              <Box>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={8}>
                    <HeaderContent>
                      <Typography
                        variant="h1"
                        color="inherit"
                        style={{
                          whiteSpace: "pre-line",
                        }}
                      >
                        {this.props.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="inherit"
                        style={{
                          fontFamily: "inherit",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {this.props.content}
                      </Typography>
                    </HeaderContent>
                  </Grid>

                  <FunkyMobileGridItem item xs={12} sm={4}>
                    <div className="background" />
                    <HeaderIllustration src={IlluHeader} />
                  </FunkyMobileGridItem>
                </Grid>
              </Box>
            </Container>
          </SuperFunkyBox>
        </Box>

        <MainContentBox id="content" paddingBottom={4} marginTop={4}>
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

export default LayoutInitiativePage;
