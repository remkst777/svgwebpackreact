import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import kiwiExternal from "./kiwi.svg?external";
import kiwiInline from "./kiwi.svg?inline";

const cell = "150px";

const IconHover = ({ color }) => `
  .fill {
    fill: ${color};
  }

  .stroke {
    stroke: ${color};
  }
`;

const IconStyled = styled.span`
  display: inline-block;
  width: 150px;
  height: 150px;
  margin-right: ${x => (x.margin ? 5 : 0)}px;

  ${x => (x.hover ? `:hover { ${IconHover({ color: x.hover })} }` : ``)};
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  :hover {
    color: red;

    ${IconStyled} {
      ${IconHover({ color: "red" })};
    }
  }
`;

const Icon = ({ icon, hover }) => (
  <IconStyled hover={hover} dangerouslySetInnerHTML={{ __html: icon }} />
);

ReactDOM.render(
  <div>
    <h4>SVG as part of button</h4>
    <Button>
      <Icon icon={kiwiExternal} />
      <span>Hello world</span>
    </Button>

    <h4>SVG as insertion</h4>
    <Icon icon={kiwiExternal} hover="blue" />

    <h4>SVG as IMG</h4>
    <img width={cell} src={kiwiInline} alt="kiwi" />

    <h4>SVG as backgroundImage</h4>
    <div
      style={{
        background: `url(${kiwiInline}) no-repeat`,
        width: cell,
        height: cell,
        backgroundSize: "contain"
      }}
    />
  </div>,
  document.getElementById("app")
);

module.hot.accept();
