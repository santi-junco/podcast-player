import { PlaylistCard } from "./PlaylistCard";
import { GoPeople } from "react-icons/go";
import "./../styles/sidebar.css";

export const Sidebar = ({ onNewPlaylist, playlists }) => {
  return (
    <section className="sidebar">
      <div className="home-container">
        <button>
          <GoPeople size={24} />
          Home
        </button>
        <button>
          <GoPeople size={24} />
          Home
        </button>
        <button>
          <GoPeople size={24} />
          Home
        </button>
        <hr />
      </div>
      <button className="new-playlist-button" onClick={onNewPlaylist}>
        <GoPeople size={24} />
        Nueva Playlist
      </button>
      <div className="content">
        <div className="playlist-container">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </div>
      </div>
      <div className="likes-container">
        <button>
          <p>Your Likes</p>
          Autoplay
        </button>
        <button>
          <p>Your Likes</p>
          Autoplay
        </button>
        <button>
          <p>Your Likes</p>
          Autoplay
        </button>
        <button>
          <p>Your Likes</p>
          Autoplay
        </button>
        <button>
          <p>Your Likes</p>
          Autoplay
        </button>
      </div>
    </section>
  );
};
