import React from "react";
import "./../styles/artistiCard.css";

export const ArtistCard = ({ title, description, img }) => {
  return (
    <div className="artist-card">
      <img src={img} alt="" />
      <div className="artist-data">
        <span className="artist-name">{title}</span>
        <p className="artist-description">{description}</p>
      </div>
    </div>
  );
};
