import { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";
import classes from "./VideoPlayer.module.css";
const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState("deer");

  const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
  };

  const videoNames = Object.keys(videos);

  const onSelectHanlder = (videoName) => {
    setVideoSrc(videos[videoName]);
  };
  return (
    <>
      <h1>Project 6: Video Player</h1>
      <div className={classes.container}>
        <Menu videoNames={videoNames} onSelect={onSelectHanlder} />
        <Video src={videoSrc} />
      </div>
    </>
  );
};

export default VideoPlayer;
