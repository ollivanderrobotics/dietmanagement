import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Header></Header>
      <div className="p-3 productMainContainer">
        <h4>Ratatouille</h4>
        <div className="d-flex row">
          <div className="col d-flex">
            <p className="">featured in</p>
            <p className="shadow ms-3 ">The New York Times</p>
          </div>
        </div>
        <div className="d-flex row">
          <div className="col d-flex">
            <FontAwesomeIcon className="pe-3 ps-2" icon={faThumbsUp} />
            <h5 className="pe-2">95%</h5>
            <p>would make this again</p>
          </div>
        </div>
        <div className="videoBanner row">
          <img src="/pic.jpg" height={500} alt="" />
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <h4>Ingredients for</h4>
            </div>
            <div className="row">
              <p>8 servings</p>
            </div>
          </div>
          <div className="col ">
            <div className="col-8 m-3 shadow d-flex justify-content-center">
              <button className="btn">
                <FontAwesomeIcon className=" " icon={faMinus} />
              </button>
              <button className=" btn">8</button>
              <button className="btn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <h4>VEGGIES</h4> <br />
          <div className="row">
            <div className="col-8">
              <p>eggplant</p>
            </div>
            <div className="col-4 text-end pe-4">
              <p>8</p>
            </div>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="row">
            <h4>Preparation</h4>
          </div>
          <div className="row  p-3">
            <div className="col-2 d-flex align-items-center justify-content-center p-3 bg-dark">
              <span>1</span>
            </div>
            <div className="col-10 d-flex align-items-center p-3 bg-dark">
              <span>Preheat the over for 375 F</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
