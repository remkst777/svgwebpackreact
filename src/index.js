import React from "react";
import ReactDOM from "react-dom";

import kiwiExternal from "./kiwi.svg?external";
import kiwiInline from "./kiwi.svg?inline";

const cell = '150px';

ReactDOM.render(
  <div>
    <h4>SVG as insertion</h4>
    <div
      style={{ width: cell, height: cell }}
      dangerouslySetInnerHTML={{ __html: kiwiExternal }}
    />

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
