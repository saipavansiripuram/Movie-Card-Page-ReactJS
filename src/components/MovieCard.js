export default function MovieCard(props){
    const movie=props.movie;
    return <div className="movie-card">
        <div className="movie-name">{movie.name}</div>
        <div><img src={movie.imgSrc} className="img" alt="movie name"/></div>
        <div></div>
    </div>
}