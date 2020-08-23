import React from "react";

import Navigator from "../../components/Navigation/Navigator.js";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";

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
        <ul>
          {VideoLinks.snugtreesVideos.map((link, i) => (
            <VideoPlayer key={i} link={link} />
          ))}
        </ul>
      </div>
      <div id="second floor band">
        <h2>Second Floor Band</h2>
        <ul>
          {VideoLinks.secondFloorBandVideos.map((link, i) => (
            <VideoPlayer key={i} link={link} />
          ))}
        </ul>
      </div>
      <div id="the what why">
        <h2>The What Why</h2>
        <ul>
          {VideoLinks.theWhatWhyVideos.map((link, i) => (
            <VideoPlayer key={i} link={link} />
          ))}
        </ul>
      </div>
    </>
  );
};
