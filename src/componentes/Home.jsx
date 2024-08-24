import { Section } from "./Section.jsx";
import { SongCard } from "./SongCard.jsx";
import { AlbumCard } from "./AlbumCard.jsx";
import { QuickCard } from "./QuickCard.jsx";
import { ArtistCard } from "./ArtistCard.jsx";

import { ALBUMS, ALBUMS_HEADER } from "../data/albums.js";
import { ARTIST_HEADER, ARTISTS } from "../data/artist.js";
import { SONG_HEADER, SONGS } from "../data/song.js";
import { QUICK_HEADER, QUICK_PICKS } from "../data/quick_picks.js";

import "./../styles/main.css";

const DATA = [
  { id: 1, headerData: SONG_HEADER, card: SongCard, cardData: ALBUMS },
  { id: 2, headerData: ARTIST_HEADER, card: ArtistCard, cardData: ARTISTS },
  { id: 3, headerData: QUICK_HEADER, card: QuickCard, cardData: QUICK_PICKS },
  { id: 4, headerData: ALBUMS_HEADER, card: AlbumCard, cardData: SONGS },
];

export const Home = () => {
  return (
    <div className="body-container">
      {DATA.map((data) => (
        <Section key={data.id} {...data} />
      ))}
    </div>
  );
};
