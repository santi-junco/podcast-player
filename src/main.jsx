import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./componentes/Header";
import { PlayBar } from "./componentes/PlayBar";
import { Section } from "./componentes/Section";
import { AlbumCard } from "./componentes/AlbumCard";
import { ArtistCard } from "./componentes/ArtistCard.jsx";
import { QuickCard } from "./componentes/QuickCard.jsx";
import { SongCard } from "./componentes/SongCard.jsx";

import { ALBUMS_HEADER } from "./data/albums.js";
import { ARTIST_HEADER } from "./data/artist.js";
import { SONG_HEADER } from "./data/song.js";
import { QUICK_HEADER } from "./data/quick_picks.js";

const DATA = [
  { id: 1, headerData: SONG_HEADER, card: <SongCard /> },
  { id: 2, headerData: ARTIST_HEADER, card: <ArtistCard /> },
  { id: 3, headerData: QUICK_HEADER, card: <QuickCard /> },
  { id: 4, headerData: ALBUMS_HEADER, card: <AlbumCard /> },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <div className="body-container">
      {DATA.map((data) => (
        <Section key={data.id} {...data}></Section>
      ))}
    </div>
    <PlayBar />
  </>
);
