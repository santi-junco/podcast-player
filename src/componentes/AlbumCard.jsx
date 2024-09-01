import { SlOptionsVertical } from "react-icons/sl";
import { IoMdPlay } from "react-icons/io";
import "./../styles/albumCard.css";

export const AlbumCard = ({ title, description, img }) => {
  return (
    <div className="card">
      <div className="album-card-imagen">
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
      <div className="album-card-data">
        <span className="title">{title}</span>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
