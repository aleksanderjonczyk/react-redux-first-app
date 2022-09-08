import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong)
    return (
      <div>
        <h2>Select a song to see more details.</h2>
      </div>
    );
  const { title, artist, duration } = selectedSong;
  return (
    <div>
      <h4>Details for {title}:</h4>
      <p>
        Artist: {artist}
        <br />
        Duration: {duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
