interface Props {
    movie: MovieInterface;
    cast: CastType[];
    imageBasePath: string;
  }
  
  interface MovieInterface {
    id: number;
    title: string;
    releaseDate: string;
    original_title: string;
    status: string;
    original_language: string
    budget: number;
    revenue: number;
  }
  
  interface CastType {
    name: string;
    character: string;
  }
const CastCrew = ({ movie, cast, imageBasePath }: Props) => {
    const languageMappings: any =  {
        en: "English",
        es: "Spanish",
        fr: "French",
        de: "German",
        it: "Italian",
        pt: "Portuguese",
        zh: "Chinese",
        ja: "Japanese",
    };
    function translate(originalLang: string) {
        return languageMappings[originalLang] || originalLang;
    }
    function formatCurrency(number: number) {
        const formattedNumber = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(number);
        return formattedNumber;
    }
    return (
        <div className="p-10">
            <h1 className="text-lg font-bold pb-5">Top Billed Cast</h1>
            <div className="cast">
                <div className="carrousell">
                <div className="flex overflow-hidden">
                    {cast.map((cast: any) => (
                    <div key={ movie.id } className="carrousell-container shadow-lg border border-gray-300 bg-white rounded-lg">
                        <div key={ cast.id } className="container">
                            <img
                                src={`${imageBasePath}${ cast.profile_path }`}
                                alt={ cast.name }
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div className="mt-2 p-3">
                            <p className="text-base font-bold">{ cast.name }</p>
                            { cast.character }
                        </div>
                    
                    </div>
                    
                ))}
                </div>
                </div>
                <div className="right-container">
                    <div className="social-icons">
                        <div className="social-link">
                            <img src="/fb.svg" width={ 29 } height={ 29 }/>
                        </div>
                        <div className="social-link">
                        <img src="/tw.svg" width={ 29 } height={ 29 }/>

                        </div>
                        <div className="social-link">
                        <img src="/ig.svg" width={ 29 } height={ 29 }/>

                        </div>
                        <div className="link">
                        <img src="/link.svg" width={ 29 } height={ 29 }/>

                        </div>
                    </div>
                    <h1 className="text-lg font-bold pt-3">Original Title</h1>
                    <p>{ movie.original_title }</p>
                    <h1 className="text-lg font-bold pt-3">Status</h1>
                    <p>{ movie.status }</p>
                    <h1 className="text-lg font-bold pt-3">Original Language</h1>
                    <p>{ translate(movie.original_language) }</p>
                    <h1 className="text-lg font-bold pt-3">Budget</h1>
                    <p>{ formatCurrency(movie.budget) }</p>
                    <h1 className="text-lg font-bold pt-3">Revenue</h1>
                    <p>{ formatCurrency(movie.revenue) }</p>
                </div>
            </div>
        </div>
    )
}
export default CastCrew;