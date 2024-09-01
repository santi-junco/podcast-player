export const PlaylistCard = ({ title, description, image }) => {
  return (
    <div className="playlist-card">
      <img src={image} alt={title} className="playlist-image" />
      <div className="playlist-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
