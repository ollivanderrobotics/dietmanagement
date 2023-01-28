import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
  return (
    <>
      <div className='w-100 d-flex justify-content-center'>
        <div className='border row searchBar p-2 m-2 '>
            <div className="col-2">
            <FontAwesomeIcon className='pe-3 ps-2' icon={faMagnifyingGlass}/>
            </div>
            <div className="col-10">
            <input className='text-center'  type="text" placeholder='Search for recipes' />
            </div>
        </div>
      </div>
    </>
  );
};
export default Search;
