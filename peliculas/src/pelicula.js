export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.image} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.title} <span>({props.year})</span></a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{props.score}</span> /10</p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Run Time: {props.duration}’    .     <span>MMPA: PG-13 </span>    .     <span>Release: {props.release}</span></p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Stars: {props.cast}</p>
            </div>
        </div>
    );
}