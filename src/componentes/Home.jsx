import { useState, useEffect } from "react";
import { Header } from "./Header";
import { PlayBar } from "./PlayBar";
import { Section } from "./Section.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { SongCard } from "./SongCard.jsx";
import { AlbumCard } from "./AlbumCard.jsx";
import { QuickCard } from "./QuickCard.jsx";
import { ArtistCard } from "./ArtistCard.jsx";
import { PlaylistForm } from "./PlaylistForm.jsx";
import { AudioProvider } from "../contexts/AudioContext.jsx";

import { fetchData } from "../functions/fetchData.js";

import { SONG_HEADER } from "../data/song.js";
import { QUICK_HEADER } from "../data/quick_picks.js";
import { ALBUMS_HEADER } from "../data/albums.js";
import { ARTIST_HEADER } from "../data/artist.js";

import "./../styles/main.css";

export const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [podcast, setPodcast] = useState([]);
  const [artist, setArtist] = useState([])
  const [quickHeader, setQuickHeader] = useState([])
  const [recommended, setRecommended] = useState([])

  const [loading, setLoading] = useState({
    podcast: true,
    artist: true,
    quickHeader: true,
    recommended: true
  });
  
  const loadData = async () => {
    try {
      const podcastData = await fetchData("https://api.audioboom.com/audio_clips");
      const artistData = await fetchData("https://api.audioboom.com/categories/240/channels");
      const quickHeaderData = await fetchData("https://api.audioboom.com/categories/240/boos");
      const recommendedData = await fetchData("https://api.audioboom.com/audio_clips/popular");

      setPodcast(podcastData?.audio_clips);
      setArtist(artistData.channels);
      setQuickHeader(quickHeaderData.audio_clips);
      setRecommended(recommendedData.audio_clips);

      setLoading({
        podcast: false,
        artist: false,
        quickHeader: false,
        recommended: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const DATA = [
    { id: 1, headerData: SONG_HEADER, card: SongCard, cardData: podcast, loading: loading.podcast },
    { id: 2, headerData: ARTIST_HEADER, card: ArtistCard, cardData: artist, loading: loading.artist },
    { id: 3, headerData: QUICK_HEADER, card: QuickCard, cardData: quickHeader, loading: loading.quickHeader },
    { id: 4, headerData: ALBUMS_HEADER, card: AlbumCard, cardData: recommended, loading: loading.recommended },
  ];

  const handleNewPlaylist = () => {
    setShowForm(true);
  };

  const handleSavePlaylist = (playlist) => {
    setPlaylists([...playlists, playlist]);
    setShowForm(false);
  };

  return (
    <AudioProvider>
      <Header />
      <div className="body-container">
        <div className="sidebar-container">
          <Sidebar onNewPlaylist={handleNewPlaylist} playlists={playlists}/>
        </div>
        <div className="content-conteiner">
          {showForm ? (
            <PlaylistForm onSave={handleSavePlaylist} />
          ) : (
            DATA.map((data) => <Section key={data.id} {...data} />)
          )}
        </div>
      </div>
      <PlayBar />
    </AudioProvider>
  );
};
