import { useEffect, useState } from 'react'
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import Pagination from './pagination';

function MovieList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [movies, setMovies] = useState([])
  const TOTAL_PER_PAGE = 2

  useEffect(() => {
      searchMovies();
  },[])

  const searchMovies = async () => {
    let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json'
    let response = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Origin": 'https://raw.githubusercontent.com/'
      }
    })
      let json = await response.json()
      setMovies(json)
  }

  let moviesPagination = movies.slice((currentPage - 1) * TOTAL_PER_PAGE, (currentPage * TOTAL_PER_PAGE))

  return (
    <PageWrapper>
      {moviesPagination.map((pelicula) =>
        <Pelicula title={pelicula.titulo} score={pelicula.calificacion} director={pelicula.director} release={pelicula.fecha} duration={pelicula.duration}
          cast={pelicula.actores} image={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Pagination page={currentPage} total={Math.ceil(movies.length / TOTAL_PER_PAGE)} onChange={(page) => {
        setCurrentPage(page)
      }} />

    </PageWrapper>

  );
}

export default MovieList;
