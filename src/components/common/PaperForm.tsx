import React from "react";

interface IPaperFormProps {
  paperform: string;
}

class PaperForm extends React.PureComponent<IPaperFormProps, {}> {
  componentDidMount(): void {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed";
    document.body.appendChild(script);
  }

  render = () => {
    return (
      <div data-paperform-id={this.props.paperform} data-takeover="1"></div>
    );
  };
}

export default PaperForm;
