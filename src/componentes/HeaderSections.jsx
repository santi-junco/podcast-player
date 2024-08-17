import { GrFormPrevious } from "react-icons/gr";
import "../styles/headerSection.css";

export const HeaderSections = ({
  playAll,
  title,
  placeholder,
  srcImgPerfil,
}) => {
  return (
    <header>
      <div className="category-title">
        <img src={srcImgPerfil} alt="perfil" />
        <div className="category-title-data">
          {placeholder ? (
            <span className="placeholder">{placeholder}</span>
          ) : (
            ""
          )}
          <span className="title">{title}</span>
        </div>
      </div>
      <div className="buttons">
        {playAll ? <button className="play-all">Play all</button> : ""}
        <div className="controls">
          <button className="previous">
            <GrFormPrevious size={40} color="#d9d9d9" />{" "}
          </button>
          <button className="next">
            <GrFormPrevious size={40} />
          </button>
        </div>
      </div>
    </header>
  );
};
