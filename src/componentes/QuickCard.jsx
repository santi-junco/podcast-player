import { TbPointFilled } from "react-icons/tb";
import { QUICK_PICKS } from "../data/quick_picks";
import "./../styles/quickCard.css";

export const QuickCard = () => {
  return (
    <div className="song-list">
      {QUICK_PICKS.map((song) => (
        <div key={song.id} className="song-item">
          <img src={song.img} alt="" />
          <div className="song-info">
            <span className="song-title">{song.title}</span>
            <span className="song-data">
              {song.artist} <TbPointFilled /> {song.data}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
