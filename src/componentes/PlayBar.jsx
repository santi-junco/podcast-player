import { BiDislike, BiLike } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";
import { RiRepeatFill } from "react-icons/ri";
import { MdOutlineVolumeUp, MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPlay } from "react-icons/io";
import "../styles/playBar.css";

export const PlayBar = () => {
  return (
    <div className="play-bar">
      <div className="container-play-bar">
        <div className="controles">
          <button>
            <MdSkipPrevious size={24} color="#fff" />
          </button>
          <button>
            <IoMdPlay size={40} color="#fff" />
          </button>
          <button>
            <MdSkipNext size={24} color="#fff" />
          </button>
          <p>0:10 / 0:41</p>
        </div>
        <div className="cancion-info">
          <img src="src/media/Rectangle 2.png" alt="" />
          <div className="container-cancion">
            <div className="info-cancion">
              <p>Listen Again</p>
              <span>
                Mufambi - The African Traveller <TbPointFilled /> 37K views{" "}
                <TbPointFilled /> 603 likes
              </span>
            </div>
            <div className="opciones-cancion">
              <button>
                <BiDislike size={18} color="#fff" />
              </button>
              <button>
                <BiLike size={18} color="#fff" />
              </button>
              <button>
                <SlOptionsVertical size={18} color="#fff" />
              </button>
            </div>
          </div>
        </div>
        <div className="otros-controles">
          <button>
            <RiRepeatFill size={32} color="#fff" />
          </button>
          <button>
            <MdOutlineVolumeUp size={32} color="#fff" />
          </button>
          <button>
            <IoMdArrowDropdown size={32} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};
