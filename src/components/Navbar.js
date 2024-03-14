import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import UserProfile from './Profile';

const Navbar = ({handleLogout}) => {
  return (
    <nav className='bg border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-700' style={{backgroundColor:'#2d3748'}}>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap text-white'>
            Welcome to Dashboard
          </span>
        </div>

        <div className='flex justify-end pr-4'>
          <div className="flex items-center border rounded px-2 py-1 mr-4">
            <FontAwesomeIcon icon={faSearch} className="text-white mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="border-none text-white outline-none focus:ring-0 bg-transparent"
            />
          </div>
          <Notification/>
        <UserProfile handleLogout={handleLogout}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;