import { createContext, useState, useContext } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(null);

  const playAudio = (url) => {
    if (audio && currentUrl !== url) {
      audio.pause();
      audio.currentTime = 0;
    }

    if (currentUrl === url && isPlaying) {
      return;
    }

    const newAudio = new Audio(url);
    newAudio.play();
    setAudio(newAudio);
    setIsPlaying(true);
    setCurrentUrl(url);

    newAudio.onended = () => {
      setIsPlaying(false);
      setCurrentUrl(null);
    };
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, playAudio, pauseAudio, currentUrl }}>
      {children}
    </AudioContext.Provider>
  );
};
