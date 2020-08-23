import React, { useState, useEffect } from "react";

import Navigator from "../../components/Navigation/Navigator.js";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.js";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [snugtreesVideos, setSnugtreesVideos] = useState([]);
  const [sfbVideos, setSfbVideos] = useState([]);
  const [twwVideos, setTwwVideos] = useState([]);

  // GET Snugtrees videos
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/youtube/snugtrees", requestOptions)
      .then((res) => res.json())
      .then((data) => setSnugtreesVideos(data.links))
      .catch((err) => console.log(err));
  }, []);

  // GET Second Floor Band videos
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/youtube/secondfloorband", requestOptions)
      .then((res) => res.json())
      .then((data) => setSfbVideos(data.links))
      .catch((err) => console.log(err));
  }, []);

  // GET The What Why videos
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/youtube/thewhatwhy", requestOptions)
      .then((res) => res.json())
      .then((data) => setTwwVideos(data.links))
      .then(() => setLoaded(true))
      .catch((err) => console.log(err));
  }, []);

  if (loaded == false) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navigator />
      <div>
        <h1>Music</h1>
      </div>
      <div id="snugtrees">
        <h2>Snugtrees</h2>
        <ul>
          {snugtreesVideos.map((link, i) => (
            <VideoPlayer key={i} link={link} />
          ))}
        </ul>
      </div>
      <div id="second floor band">
        <h2>Second Floor Band</h2>
        <ul>
          {sfbVideos.map((link, i) => (
            <VideoPlayer key={i} link={link} />
          ))}
        </ul>
      </div>
      <div id="the what why">
        <h2>The What Why</h2>
        <ul>
          {twwVideos.map((link, i) => (
            <VideoPlayer key={i} link={link} />
          ))}
        </ul>
      </div>
    </>
  );
};
