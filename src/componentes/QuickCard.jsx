import { TbPointFilled } from "react-icons/tb";
import "./../styles/quickCard.css";

export const QuickCard = ({ title, artist, description, img }) => {
  return (
    <div className="song-item">
      <img src={img} alt="" />
      <div className="song-info">
        <span className="song-title">{title}</span>
        <span className="song-data">
          {artist} <TbPointFilled /> {description}
        </span>
      </div>
    </div>
  );
};
