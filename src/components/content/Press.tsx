import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Link,
} from "@material-ui/core";
import { GetApp, PictureAsPdf, Link as LinkIcon } from "@material-ui/icons";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import CTABox from "../common/CTABox";
import NewsCard from "../common/NewsCard";
import OptionalLinkWrapper from "../common/OptionalLinkWrapper";

import PhotoSolveigRatenow from "../../images/solveig_rathenow.png";
import PhotoKerstinBock from "../../images/kerstin_bock.png";
import PressKitLogo from "../../images/presskit_logo.svg";

import IconArrowRight from "../../images/icon_arrow_right.svg";

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
            <Typography variant="h4" color="primary">
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
            <Typography variant="h4" color="primary">
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
            style={{
              borderTop: "1px solid #CED7DB",
              borderBottom: "1px solid #CED7DB",
            }}
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

          <Box paddingBottom={4} paddingTop={4} marginTop={4}>
            <Typography variant="h2">
              {this.props.t("press.release")}
            </Typography>

            <OptionalLinkWrapper link={this.props.t("press.releaseHrefURL")}>
              <PressReleaseCardRoot>
                <PressReleaseCardContent>
                  <Typography variant="h6">
                    <PressReleaseIconWrapper>
                      <LinkIcon />
                    </PressReleaseIconWrapper>
                    {this.props.t("press.releaseTitle")}
                  </Typography>
                </PressReleaseCardContent>
              </PressReleaseCardRoot>
            </OptionalLinkWrapper>

            <OptionalLinkWrapper link={this.props.t("press.releaseHrefPDF")}>
              <PressReleaseCardRoot>
                <PressReleaseCardContent>
                  <Typography variant="h6">
                    <PressReleaseIconWrapper>
                      <PictureAsPdf />
                    </PressReleaseIconWrapper>
                    {this.props.t("press.releaseTitle")}
                  </Typography>
                </PressReleaseCardContent>
              </PressReleaseCardRoot>
            </OptionalLinkWrapper>

            <OptionalLinkWrapper link="/FuturePerfect_Press_Release_28.4.2020.pdf">
              <PressReleaseCardRoot>
                <PressReleaseCardContent>
                  <Typography variant="h6">
                    <PressReleaseIconWrapper>
                      <PictureAsPdf />
                    </PressReleaseIconWrapper>
                    {this.props.t("press.releaseTitleFuturePerfect")}
                  </Typography>
                </PressReleaseCardContent>
              </PressReleaseCardRoot>
            </OptionalLinkWrapper>
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

const StyledPressKitImage: AnyStyledComponent = styled.img`
  margin: 2rem 0;
  max-width: 100%;
`;

const PressReleaseCardRoot: AnyStyledComponent = styled(Card)`
  && {
    border-radius: 15px;
    box-shadow: 0px 2px 24px #e3e6eb;
    margin-bottom: 2rem;
    padding: 0.8rem;

    @media (min-width: 600px) {
      padding: 1rem 4rem 1rem 1rem;

      &:hover {
        background-image: url(${IconArrowRight});
        background-position: right 2rem center;
        background-repeat: no-repeat;
      }
    }
  }
`;

const PressReleaseCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    max-width: 680px;

    &:last-child {
      padding-bottom: 16px;
    }
  }
`;

const PressReleaseIconWrapper: AnyStyledComponent = styled.div`
  margin-right: 10px;
  margin-top: -4px;
  display: inline;
  float: left;
`;

export default withTranslation()(PressContact);
