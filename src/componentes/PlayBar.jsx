import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { useAudio } from "../contexts/AudioContext";
import "../styles/playBar.css";

export const PlayBar = () => {
  const {
    isPlaying,
    currentTrack,
    playAudio,
    pauseAudio,
    skipForward,
    skipBackward,
    currentTime,
    duration
  } = useAudio();

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else if (currentTrack) {
      playAudio(currentTrack);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div className="play-bar">
      <div className="container-play-bar">
        <div className="controles">
          <button onClick={() => skipBackward(10)}>
            <MdSkipPrevious size={24} color="#fff" />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <IoMdPause size={40} color="#fff" />
            ): (
              <IoMdPlay size={40} color="#fff" />
            )}
          </button>
          <button onClick={() => skipForward(10)}>
            <MdSkipNext size={24} color="#fff" />
          </button>
          <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
        </div>
        <div className="cancion-info">
          {currentTrack ? (
            <>
              <img src={currentTrack.image} alt="Cover" />
              <div className="container-cancion">
                <div className="info-cancion">
                  <span>{currentTrack?.title}</span>
                </div>
              </div>
            </>
          ) : (<span style={{color: "#fff"}}>No track selected</span>)}
        </div>
      </div>
    </div>
  )
};
