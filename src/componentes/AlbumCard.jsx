import { SlOptionsVertical } from "react-icons/sl";
import { IoMdPlay } from "react-icons/io";
import { ALBUMS } from "../data/albums.js";
import "./../styles/albumCard.css";

export const AlbumCard = () => {
  return (
    <>
      {ALBUMS.map((album) => (
        <div key={album.id} className="card">
          <div className="album-card-imagen">
            <div
              className="img"
              style={{ backgroundImage: `url(${album.img})` }}>
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
            <span className="title">{album.title}</span>
            <p className="description">{album.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
