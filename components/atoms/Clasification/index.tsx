interface Props {
    movie: MovieInterface;
}
  
interface MovieInterface {
    adult: boolean
}

const Clasification = ({ movie }: Props) => {
    return (
        <>
        {movie.adult === false 
        ? <div className="clasification">
            G
        </div>
        :
        <div className="clasification">
            PG-13
        </div>
        }
        </>
    )
}
export default Clasification;