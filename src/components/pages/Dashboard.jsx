import Search from "../inc/Search";
import { useNavigate } from "react-router-dom";
import Footer from "../inc/Footer";
const Dashboard = () => {
  const navigate = useNavigate()
 const handleClick = () => {
    navigate('/product')
  }
  return (
    <>
      <Search></Search>
      <div className="row w-100 text-center">
        <div className="col-3 p-2">
          <p>Welcome to Tasty</p>
        </div>
        <div className="col-9 p-3">
          <h4>Here's what we</h4>
          <h4>recommend for you!</h4>
        </div>
      </div>
      <div className="row p-3 w-100">
          <div className="col-6" onClick={handleClick}>
            <div className="row p-3">
              <img src="/pic.jpg" height={200} alt="pic" />
            </div>
            <div className="row ps-5">Cupcake Toppers</div>
          </div>
        <div className="col-6" onClick={handleClick}>
          <div className="row p-3">
            <img src="/pic.jpg" height={200} alt="pic" />
          </div>
          <div className="row ps-5">Cupcake Toppers</div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Dashboard;
