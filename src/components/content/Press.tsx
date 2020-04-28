import React from "react";
import { Box, Button, Typography, Avatar, Grid, Link } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import CTABox from "../common/CTABox";
import NewsCard from "../common/NewsCard";

import PhotoSolveigRatenow from "../../images/solveig_rathenow.png";
import PhotoKerstinBock from "../../images/kerstin_bock.png";
import PressKitLogo from "../../images/presskit_logo.svg";

import ReleaseEnLogo from "../../../public/pr_en.png";
import ReleaseDeLogo from "../../../public/pr_de.png";

import NewsData from "../../data/latestnews.json";

const INITIAL_LIST_LENGTH = 5;
const LIST_LENGTH_INCREMENT = 5;

interface INewsItem {
  date: string;
  outlet: string;
  teaser: string;
  link: string;
}

interface IPressState {
  listLength: number;
}

const DEFAULT_STATE: IPressState = {
  listLength: INITIAL_LIST_LENGTH,
};

class PressContact extends React.PureComponent<WithTranslation, IPressState> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  getNewsItems = (limit?: number): Array<INewsItem> => {
    const news = NewsData.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date),
    );
    if (limit) {
      return news.slice(0, limit);
    }
    return news;
  };

  handleShowMore = () => {
    this.setState({
      listLength: this.state.listLength + LIST_LENGTH_INCREMENT,
    });
  };

  render = () => {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h2">
              {this.props.t("press.mediaHeader")}
            </Typography>
            {this.getNewsItems().map(
              (newsItem, index) =>
                index < this.state.listLength && (
                  <NewsCard
                    key={`${newsItem.date}-${newsItem.link}`}
                    outlet={newsItem.outlet}
                    teaser={newsItem.teaser}
                    link={newsItem.link}
                  />
                ),
            )}
            <Box paddingBottom={4}>
              {this.getNewsItems().length > this.state.listLength && (
                <ShowMoreButton
                  color="primary"
                  variant="outlined"
                  disableFocusRipple={true}
                  onClick={this.handleShowMore}
                >
                  {this.props.t("press.showOlderNews")}
                </ShowMoreButton>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4">
              {this.props.t("press.contactHeader")}
            </Typography>
            <Typography variant="body1">
              {this.props.t("press.inqueryInitiative")}{" "}
              <Link href="mailto:media@gesund-zusammen.de">
                media@gesund-zusammen.de
              </Link>
            </Typography>
            <StyledAvatar alt="Solveig Ratenow" src={PhotoSolveigRatenow} />
            <Typography variant="h6" color="primary">
              Solveig Ratenow
            </Typography>
            <Typography variant="subtitle1">
              Head of Venture communication @ Finleap
            </Typography>
            <br />
            <br />
            <Typography variant="body1">
              {this.props.t("press.inqueryAccelerator")}{" "}
              <Link href="mailto:media.accelerator@gesund-zusammen.de">
                media.accelerator@gesund-zusammen.de
              </Link>
            </Typography>
            <StyledAvatar alt="Kerstin Bock" src={PhotoKerstinBock} />
            <Typography variant="h6" color="primary">
              Kerstin Bock
            </Typography>
            <Typography variant="subtitle1">
              Head of Media relations @ Tech Open Air
            </Typography>
          </Grid>
        </Grid>
        <PressContactWrapper paddingBottom={4}>
          <Box
            paddingBottom={4}
            paddingTop={4}
            marginTop={4}
            style={{ borderTop: "1px solid #CED7DB" }}
          >
            <Typography variant="h2">
              {this.props.t("press.resources")}
            </Typography>
            <Typography variant="body2" color="primary">
              {this.props.t("press.resourcesLine1")}
            </Typography>
            <Link href="/PressKit.zip">
              <StyledPressKitImage src={PressKitLogo} />
            </Link>
            <Typography variant="body2" color="primary">
              {this.props.t("press.resourcesLine2")}
            </Typography>
            <StyledDownloadLink href="/PressKit.zip">
              <Typography variant="body2" color="primary">
                <StyledDownloadButton color="primary" fontSize="small" />
                {this.props.t("press.downloadLogo")}
              </Typography>
            </StyledDownloadLink>
          </Box>
          <Box
            paddingBottom={4}
            paddingTop={4}
            marginTop={4}
            style={{ borderTop: "1px solid #CED7DB" }}
          >
            <Typography variant="h2">
              {this.props.t("press.release")}
            </Typography>
            <Typography variant="body1" color="primary">
              {this.props.t("press.releaseLine1")}
            </Typography>
            <Typography variant="body2">
              <Link href={this.props.t("press.releaseHrefURL")}>
                {"Link: " + this.props.t("press.releaseTitle")}
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href={this.props.t("press.releaseHrefPDF")}>
                {"PDF: " + this.props.t("press.releaseTitle")}
              </Link>
            </Typography>
            <Link href="/pr_en.png">
              <StyledPressReleaseImage src={ReleaseEnLogo} />
            </Link>
            <Link href="/pr_de.png">
              <StyledPressReleaseImage src={ReleaseDeLogo} />
            </Link>
          </Box>
        </PressContactWrapper>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("press.claim")}
            cta={this.props.t("press.cta")}
            href={this.props.t("press.link")}
          />
        </Box>
      </>
    );
  };
}

const ShowMoreButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    padding-right: 2rem;
    padding-left: 2rem;

    &:hover {
      color: #ffffff;
      background-color: #003269 !important;
    }
  }
`;

const PressContactWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 600px) {
      padding-right: 16rem;
    }
  }
`;

const StyledAvatar: AnyStyledComponent = styled(Avatar)`
  && {
    width: 150px;
    height: 150px;
    margin: 0 0 1rem 0;
    border: 8px solid rgba(0, 170, 200, 0.3);
  }
`;

const StyledDownloadLink: AnyStyledComponent = styled(Link)`
  && {
    display: inline-block;
    margin-top: 1rem;
  }
`;

const StyledDownloadButton: AnyStyledComponent = styled(GetApp)`
  && {
    margin: 0.2rem 0.5rem 0 0;
    float: left;
  }
`;

const StyledPressReleaseImage: AnyStyledComponent = styled.img`
  margin: 2rem 2rem 2rem 0;
  max-width: 368px;
  border: 1px solid #00aac8;
`;

const StyledPressKitImage: AnyStyledComponent = styled.img`
  margin: 2rem 0;
  max-width: 100%;
`;

export default withTranslation()(PressContact);
