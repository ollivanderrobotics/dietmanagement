import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faHeart, faHome, faLeftLong, faShare, faUser } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const navigate = useNavigate()
  const handleClick = (route) => {
    navigate(route)
    console.log('working');
  }
  return (
    <>
      <nav className="navbar fixed-bottom mainFooterContainer d-flex justify-content-center">
      <div className="row w-100">
        <div className="col-2" onClick={() =>handleClick('/')}>
                <FontAwesomeIcon className="pe-3 ps-2" icon={faHome} />
        </div>
        <div className="col-6">
        </div>
        <div className="col-4 d-flex justify-content-end" onClick={() =>handleClick('/admin')}>
          <div className="col-6 text-center" >
          <FontAwesomeIcon className="pe-3 ps-2" icon={faUser} />
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};
export default Footer;
