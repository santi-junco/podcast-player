import { GrFormPrevious } from "react-icons/gr";
import "../styles/headerSection.css";

export const HeaderSections = ({
  playAll,
  title,
  placeholder,
  srcImgPerfil,
  onNext,
  onPrev
}) => {
  return (
    <header>
      <div className="category-title">
        <img src="/perfil.png" alt="perfil" />
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
        {playAll && <button className="play-all">Play all</button>}
        <div className="controls">
          <button className="previous" onClick={onPrev}>
            <GrFormPrevious size={40} color="#d9d9d9" />{" "}
          </button>
          <button className="next" onClick={onNext}>
            <GrFormPrevious size={40} />
          </button>
        </div>
      </div>
    </header>
  );
};
