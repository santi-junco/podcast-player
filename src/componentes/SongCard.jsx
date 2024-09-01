import { SlOptionsVertical } from "react-icons/sl";
import { IoMdPlay } from "react-icons/io";
import "./../styles/songCard.css";

export const SongCard = ({ img, title, description }) => {
  return (
    <div className="song-card">
      <div className="song-card-imagen">
        <div className="img" style={{ backgroundImage: `url(${img})` }}>
          <div className="buttons">
            <button className="options">
              <SlOptionsVertical color="#fff" />
            </button>
            <button className="play">
              <IoMdPlay size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="song-card-data">
        <span className="title">{title}</span>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
