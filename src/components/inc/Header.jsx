import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faHeart, faLeftLong, faShare } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <nav className="navbar fixed-top mainHeaderContainer d-flex justify-content-center">
      <div className="row w-100">
        <div className="col-2" onClick={handleClick}>
                <FontAwesomeIcon className="pe-3 ps-2" icon={faLeftLong} />
        </div>
        <div className="col-6">
        </div>
        <div className="col-4 d-flex justify-content-end">
          <div className="col-6 text-center">
          <FontAwesomeIcon className="pe-3 ps-2" icon={faShare} />
          </div>
          <div className="col-6 text-center">
          <FontAwesomeIcon className="pe-3 ps-2" icon={faHeart} />
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};
export default Header;
