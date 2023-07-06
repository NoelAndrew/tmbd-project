import Link from "next/link";

const Navigation = () => {
    return(
    <>
    <header className="navbar">
        <div className="flex items-center ml-9">
            <div className="mr-4">
                <Link href="/">
                    <img src="/logo.svg" width={ 154 } height={ 20 }/>
                </Link>
            </div>
            <div className="flex">
                <a className="mr-3 font-semibold hover:text-gray-400">Movies</a>
                <a className="mr-3 font-semibold hover:text-gray-400">TV shows</a>
                <a className="mr-3 font-semibold hover:text-gray-400">People</a>
                <a className="mr-3 font-semibold hover:text-gray-400">More</a>
            </div>  
        </div>
        <div className="flex items-center mr-9">
            <div className="mr-5 flex items-center hover:text-gray-400">
                <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true" fill="currentColor"><path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
            </div>
            <div className="mr-5 flex items-center hover:text-gray-400">
                <div className="w-7 h-7 border border-white rounded-lg flex items-center justify-center">
                    EN
                </div>
            </div>
            <div className="flex">
                <a className="mr-3 font-semibold hover:text-gray-400">Login</a>
                <a className="mr-3 font-semibold hover:text-gray-400">Join TMDB</a>
            </div> 
            <div className="flex">
                <img src="/search.svg" width={ 29 } height={ 29 }/>
            </div>
        </div>   
        
    </header>
    </>
    )
}
export default Navigation;