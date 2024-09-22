import { TbPointFilled } from "react-icons/tb";
import "./../styles/quickCard.css";

export const QuickCard = (quickData) => {
  const { title, channel, description = '', urls } = quickData
  return (
    <div className="song-item">
      <img src={channel.urls.logo_image.original} alt="" />
      <div className="song-info">
        <span className="song-title">{title.length > 30 ? title.slice(0, 30) + " ...": title}</span>
        <span className="song-data">
          {channel.title.length > 25 ? channel.title.slice(0, 25) + " ...": channel.title} {description ? <TbPointFilled /> : ""} {description.length > 10 ? description.slice(0, 10) + " ..." : description}
        </span>
      </div>
    </div>
  );
};
