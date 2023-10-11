const Menu = (props) => {
  const videoNames = props.videoNames;

  return (
    <form
      className="video-form"
      onClick={(event) => props.onSelect(event.target.value)}
    >
      {videoNames.map((video, i) => (
        <label class="radio-inline">
          <input key={i} type="radio" name={video} value={video} />
          {video}
        </label>
      ))}
    </form>
  );
};

export default Menu;
