import { SlOptionsVertical } from "react-icons/sl";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import { useAudio } from "../contexts/AudioContext";

import "./../styles/songCard.css";


export const SongCard = (song) => {
  const { title, description = '', channel, urls } = song;
  const { isPlaying, playAudio, pauseAudio, currentUrl, currentTrack } = useAudio();

  const isCurrentTrack = currentTrack?.url === urls.high_mp3

  const handlePlayPause = () => {
    if (isCurrentTrack && isPlaying) {
      pauseAudio()
    } else {
      playAudio({
        url: urls.high_mp3,
        title: title,
        image: channel.urls.logo_image.original
      })
    }
  };

  return (
    <div className="song-card">
      <div className="song-card-imagen">
        <div className="img" style={{backgroundImage: `url(${channel.urls.logo_image.original})`}}>
          <div className="buttons">
            <button className="options">
              <SlOptionsVertical color="#fff" />
            </button>
            <button className={isCurrentTrack && isPlaying ? "pause" : "play"} onClick={handlePlayPause}>
              {isCurrentTrack && isPlaying ? <IoMdPause size={25}/> : <IoMdPlay size={25}/>}
            </button>
          </div>
        </div>
      </div>
      <div className="song-card-data">
        <span className="title"> {title.slice(0, 20) + "..."}</span>
        <p className="description">{description.length > 45 ? description.slice(0, 45) + " ..." : description}</p>
      </div>
    </div>
  )
};
