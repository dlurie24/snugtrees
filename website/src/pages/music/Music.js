import React from "react";

import Navigator from "../../components/Navigation/Navigator.js";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";

import useScript from "../../hooks/useScript.js";

import * as VideoLinks from "../../constants/VideoLinks.js";

export default () => {
  return (
    <>
      <Navigator />
      <div>
        <h1>Music</h1>
      </div>
      <div id="snugtrees">
        <h2>Snugtrees</h2>
      </div>
      <div id="second floor band">
        <h2>Second Floor Band</h2>
      </div>
      <div id="the what why">
        <h2>The What Why</h2>
      </div>
    </>
  );
};
