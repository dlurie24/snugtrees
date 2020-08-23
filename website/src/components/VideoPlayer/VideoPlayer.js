import React from "react";
import ReactPlayer from "react-player";

export default (props) => {
  return (
    <>
      <ReactPlayer url={props.link} width={180} height={120} />
    </>
  );
};
