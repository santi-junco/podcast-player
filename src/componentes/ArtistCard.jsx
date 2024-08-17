import React from "react";
import { ARTISTS } from "../data/artist";
import "./../styles/artistiCard.css";

export const ArtistCard = () => {
  return (
    <>
      {ARTISTS.map((artist) => (
        <div key={artist.id} className="artist-card">
          <img src={artist.img} alt="" />
          <div className="artist-data">
            <span className="artist-name">{artist.title}</span>
            <p className="artist-description">{artist.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
