import Header from '../inc/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, } from '@fortawesome/free-solid-svg-icons'
const Admin = () => {
  return (
    <>
      <Header></Header>
      <div className="p-3">
        <div className="m-2 mt-5 mb-5 ">
          <form className=" row addReceipeForm pb-4 p-2 text-center">
            <div className="row pb-4 ">
              <input type="text" className="text-center shadow p-2 ms-2 me-5" placeholder="Recipe Name" />
            </div>
            <div className="row">
              <div className="col-8">
                <input type="text" className="shadow" placeholder="Ingredient Name" />
              </div>
              <div className="col-4">
                <input type="number" className="text-center shadow" placeholder="Quantity" />
              </div>
            </div>
            <div className="row pt-4  d-flex justify-content-end">
              <button className="col-2 btn shadow-lg">
              <FontAwesomeIcon className='pe-3 ps-2' icon={faPlus}/>
              </button>
            </div>
            <div className="row pt-4  d-flex justify-content-center">
            <button className="btn btn-warning w-25">Submit</button>
            </div>
          </form>
        </div>
        <div className="p-3 pt-5 showReceipeTable">
          <table class="table m-2 p-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Catagory</th>
                <th scope="col">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Admin;
