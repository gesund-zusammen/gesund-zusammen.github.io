import React from "react";
import { Typography } from "@material-ui/core";
import { Done } from "@material-ui/icons";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import IconWhatsApp from "../../../images/icon_whatsapp.svg";
import IconFacebook from "../../../images/icon_facebook.svg";
import IconEmail from "../../../images/icon_email.svg";

interface IFooterShareBoxState {
  linkCopied: boolean;
}

const DEFAULT_STATE = {
  linkCopied: false,
};

class FooterShareBox extends React.PureComponent<
  WithTranslation,
  IFooterShareBoxState
> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  copyToClipboard = (str: string) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    this.setState({ linkCopied: true });
  };

  render = () => {
    return (
      <>
        <Typography variant="subtitle1">
          {this.props.t("footer.shareLink")}
        </Typography>
        <CopyBox>
          <span>{window.location.href}</span>
          {this.state.linkCopied && <CopiedIndicator />}
          <CopyLink onClick={() => this.copyToClipboard(window.location.href)}>
            {this.state.linkCopied
              ? this.props.t("footer.copied")
              : this.props.t("footer.copy")}
          </CopyLink>
        </CopyBox>
        <ShareBox>
          <Typography variant="subtitle2">
            {this.props.t("footer.shareVia")}
          </Typography>
          <a
            className="share-icon-link"
            href={`whatsapp://send?text=${window.location.href}`}
            data-action="share/whatsapp/share"
          >
            <img
              className="share-icon"
              src={IconWhatsApp}
              alt="Share with WhatsApp"
            />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon-link"
          >
            <img
              className="share-icon"
              src={IconFacebook}
              alt="Share on Facebook"
            />
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(
              this.props.t("footer.emailShareSubject").toString(),
            )}&body=${encodeURIComponent(window.location.href)}`}
            className="share-icon-link"
          >
            <img className="share-icon" src={IconEmail} alt="Share via Email" />
          </a>
        </ShareBox>
      </>
    );
  };
}

const CopyBox: AnyStyledComponent = styled.div`
  display: block;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ced7db;
  color: #3c3c3c;
  background: #ffffff;
`;

const CopyLink: AnyStyledComponent = styled.span`
  float: right;
  color: #0a6eaa;
  font-weight: 600;
  cursor: pointer;
`;

const CopiedIndicator: AnyStyledComponent = styled(Done)`
  float: right;
  color: #0a6eaa;
  margin: -0.4rem 0 0 0.5rem;
`;

const ShareBox: AnyStyledComponent = styled.div`
  display: block;
  text-align: center;
  padding: 1rem 0;

  & .share-icon {
    margin-left: 2rem;
    margin-top: 1rem;

    &:first-of-type {
      margin-left: 0;
    }
  }

  & .share-icon-link {
    margin-left: 2rem;
    margin-top: 1rem;

    &:first-of-type {
      margin-left: 0;
    }
  }

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export default withTranslation()(FooterShareBox);
