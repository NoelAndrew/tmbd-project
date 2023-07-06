import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ getPopularMovies, getUpcomingMovies, getRatedMovies }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const handleToggle2 = () => {
      setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(false);

    const handleToggle3 = () => {
      setIsOpen3(!isOpen3);
    };
    return(
    <div>
        <h1 className="text-lg font-bold">Popular Movies</h1>
        <div className="rounded-lg shadow grid grid-rows-[auto,1fr]">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg items-center mt-2">
                <button
                    className="flex items-center justify-between w-full p-4"
                    onClick={handleToggle}
                >
                    <span className="text-lg font-bold">Sort</span>
                    <svg
                        className={`w-6 h-6 transition-transform ${
                        isOpen ? 'transform rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {isOpen && (
                <div className="p-4 bg-white">
                    <div className="p-4 border-t-2 border-b-2 border-gray-200">
                        <p className="text-gray-400">Show me</p>
                        <div className="mt-2">
                            <div>
                                <input type="radio" id="popularMovies" name="movieSort" className="w-4 h-4 mr-2" onClick={getPopularMovies} defaultChecked/>
                                <label htmlFor="popularMovies">By Popularity</label>
                            </div>
                            <div>
                                <input type="radio" id="upcomingMovies" name="movieSort" className="w-4 h-4 mr-2" onClick={getUpcomingMovies} />
                                <label htmlFor="upcomingMovies">By Upcoming</label>
                            </div>
                            <div>
                                <input type="radio" id="betterRated" name="movieSort" className="w-4 h-4 mr-2" onClick={getRatedMovies} />
                                <label htmlFor="betterRated">Higher Rated</label>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg items-center mt-2">
                <button
                    className="flex items-center justify-between w-full p-4"
                    onClick={handleToggle2}
                >
                    <span className="text-lg font-bold">Where to watch</span>
                    <svg
                        className={`w-6 h-6 transition-transform ${
                        isOpen2 ? 'transform rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {isOpen2 && (
                <div className="p-4 bg-white">
                    <div className="mt-2">
                        <div>
                            <input type="radio" className="w-4 h-4 mr-2" />
                            <label>Netflix</label>
                        </div>
                        <div>
                            <input type="radio" className="w-4 h-4 mr-2" />
                            <label>HBO Max</label>
                        </div>
                        <div>
                            <input type="radio" className="w-4 h-4 mr-2" />
                            <label>Amazon Prime</label>
                        </div>
                        <div>
                            <input type="radio" className="w-4 h-4 mr-2" />
                            <label>Cinema</label>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="bg-white mt-2 mb-2">
            <button
                className="flex items-center justify-between w-full p-4"
                onClick={handleToggle3}
            >
                <span className="text-lg font-bold">Filters</span>
                <svg
                    className={`w-6 h-6 transition-transform ${
                    isOpen3 ? 'transform rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </button>
                {isOpen3 && (
                <div className="bg-white">
                    <div className="p-4 border-t-2 border-b-2 border-gray-200">
                        <p className="text-gray-400">Show me</p>
                        <div className="mt-2">
                            <div>
                                <input type="radio" className="w-4 h-4 mr-2" />
                                <label>Everything</label>
                            </div>
                            <div>
                            <input type="radio" className="w-4 h-4 mr-2" />
                                <label>Movies I Haven't Seen</label>
                            </div>
                            <div>
                            <input type="radio" className="w-4 h-4 mr-2" />
                                <label>Movies I Have Seen</label>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t-2 border-b-2 border-gray-200">
                        <p className="text-gray-400">Aviabilities</p>
                        <div className="mt-2">
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <label>Search All Aviabilities</label>
                        </div>
                    </div>
                    <div className="p-4 border-t-2 border-b-2 border-gray-200">
                        <p className="text-gray-400">Release dates</p>
                        <div className="mt-2">
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <label>Search All Releases?</label>
                        </div>
                        <div className="mt-2" >
                            <div className="flex justify-between">
                                <div className="mt-2 justify-between">
                                    <label>From:</label>
                                </div>
                                <div className="w-40">
                                    <div className="border items-center border-gray-400 p-2 overflow-hidden">
                                        <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
                                    </div>
                                
                                </div>
                            </div>
                            <div className="mt-2 flex justify-between" >
                                <div className="mr-2 items-center">
                                    <label>To:</label>
                                </div>
                                <div className="w-40">
                                    <div className="border items-center border-gray-400 p-2 overflow-hidden" >
                                        <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t-2 border-b-2 border-gray-200">
                        <p className="text-gray-400">Generes</p>
                        <div className="mt-2 flex">
                            <div className="border border-gray-300 rounded-full p-3 mr-2">
                                Action
                            </div>
                            <div className="border border-gray-300 rounded-full p-3">
                                Adventure
                            </div>
                        </div>
                        <div className="mt-2 flex">
                            <div className="border border-gray-300 rounded-full p-3 mr-2">
                                Animation
                            </div>
                            <div className="border border-gray-300 rounded-full p-3">
                                Comedy
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div> 
    )
}
export default Filter;