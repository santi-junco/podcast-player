import React from "react";
import "./../styles/artistiCard.css";

export const ArtistCard = (artist) => {
  const { title, description, urls } = artist
  return (
    <div className="artist-card">
      <img src={urls.logo_image.original} alt="" />
      <div className="artist-data">
        <span className="artist-name">{title.length > 45 ? title.slice(0, 45) + " ..." : title}</span>
      </div>
    </div>
  );
};
