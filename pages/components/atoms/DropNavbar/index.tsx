import { useState } from 'react';

const DropNavbar = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
  };

  return (
    <nav className="flex justify-center bg-white text-white">
        <div className="p-1">
            <div className="dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Overview</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu fixed hidden text-gray-700 pt-1">
                    <div className="bg-white border border-gray-200 rounded-20">
                        <li className=""><a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Principal</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Alternative Titles</a></li>
                        <li className=""><a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Cast & Crew</a></li>
                        <li className=""><a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Translate</a></li>
                        <li className=""><a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Changes</a></li>
                    </div>

                 </ul>
            </div>
            <div className="dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Multimedia</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu fixed hidden text-gray-700 pt-1">
                    <div className="bg-white border border-gray-200 rounded-20">
                        <li className=""><a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Background Images</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Logos</a></li>
                        <li className=""><a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Posters</a></li>
                        <li className=""><a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Videos</a></li>
                    </div>

                 </ul>
            </div>
            <div className="dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Fandom</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu fixed hidden text-gray-700 pt-1">
                    <div className="bg-white border border-gray-200 rounded-20">
                        <li className=""><a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">discussions</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Reviews</a></li>
                    </div>

                 </ul>
            </div>
            <div className="dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Share</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu fixed hidden text-gray-700 pt-1">
                    <div className="bg-white border border-gray-200 rounded-20">
                        <li className=""><a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Copy Link</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Facebook</a></li>
                        <li className=""><a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Tweet</a></li>
                    </div>

                 </ul>
            </div>
        </div>
    </nav>
  );
};

export default DropNavbar;