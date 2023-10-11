const Video = (props) => {
  return (
    <video
      style={{ margin: "30px", width: "700px", maxWidth: "85%" }}
      loop
      controls
      autostart="true"
      autoPlay
      muted
      src={props.src}
    />
  );
};

export default Video;
