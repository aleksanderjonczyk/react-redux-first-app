import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "high IQ", artist: "$NOT", duration: "2:56" },
    { title: "Praise God", artist: "Kanye West", duration: "3:47" },
    { title: "Sonic Skit", artist: "OKI", duration: "1:04" },
    { title: "Nowiny", artist: "Paktofonika", duration: "3:44" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
