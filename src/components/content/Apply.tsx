import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";

class Apply extends React.Component<WithTranslation, {}> {
  componentDidMount(): void {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed";
    document.body.appendChild(script);
  }

  render = () => {
    return <div data-paperform-id="gesundzusammen" data-takeover="1"></div>;
  };
}

export default withTranslation()(Apply);
