import { createContext, useState, useContext, useEffect, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0)

  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      audio.onloadedmetadata = () => {
        setDuration(audio.duration)
      }

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime)
      }

      return () => {
        audio.ontimeupdate = null;
        audio.onloadedmetadata = null;
      };
    }
  }, [audioRef.current]);

  const playAudio = (track) => {
    const { url, title, image } = track;

    if (!audioRef.current || currentUrl !== url) {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const newAudio = new Audio(url);
      audioRef.current = newAudio;
      audioRef.current.play();
      setCurrentTrack({ title, image, url });
      setCurrentUrl(url);
      setIsPlaying(true);

      newAudio.onloadedmetadata = () => {
        setDuration(newAudio.duration);
      };

      newAudio.onended = () => {
        setIsPlaying(false);
        setCurrentUrl(null);
        setCurrentTrack(null);
      };
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipForward = (second) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + second, audioRef.current.duration)
    }
  }
  
  const skipBackward = (second) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - second, 0)
    }
  }

  return (
    <AudioContext.Provider value={{ 
      isPlaying,
      playAudio, 
      pauseAudio, 
      currentUrl,
      currentTrack,
      duration,
      currentTime,
      skipBackward,
      skipForward
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
