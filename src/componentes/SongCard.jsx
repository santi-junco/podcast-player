import { SlOptionsVertical } from "react-icons/sl";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import { useAudio } from "../contexts/AudioContext";

import "./../styles/songCard.css";


export const SongCard = (song) => {
  const { title, description = '', channel, urls } = song;
  const { isPlaying, playAudio, pauseAudio, currentUrl } = useAudio();

  const handlePlayPause = () => {
    if (currentUrl === urls.high_mp3 && isPlaying) {
      pauseAudio(); 
    } else {
      playAudio(urls.high_mp3);
    }
  };

  return (
    <div className="song-card">
      <div className="song-card-imagen">
        <div className="img" style={{ backgroundImage: `url(${channel.urls.logo_image.original})` }}>
          <div className="buttons">
            <button className="options">
              <SlOptionsVertical color="#fff" />
            </button>
            <button className={isPlaying && currentUrl === urls.high_mp3 ? "pause" : "play"} onClick={handlePlayPause}>
              {isPlaying && currentUrl === urls.high_mp3 ? <IoMdPause size={25} /> : <IoMdPlay size={25} />}
            </button>
          </div>
        </div>
      </div>
      <div className="song-card-data">
        <span className="title">{title.slice(0, 20) + " ..."}</span>
        <p className="description" >{description.length > 45 ? description.slice(0, 45) + " ..." : description}</p>
      </div>
    </div>
  );
};
