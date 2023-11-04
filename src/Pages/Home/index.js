import api from '../../services/api';
import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
function Home() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const apiKey = "83ec4b446f7ef33b231016fb87bf4279"
  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
          page: 1
        }

      })
      // const data = await response.json()
      setFilms(response.data.results.slice(0, 10))
      // console.log(response.data.results.slice(0, 10));
      setLoading(false)
    }
    loadFilms()
  }
    , [])
  if (loading) {
    return (
      <div className='loading'>
        <h1>Carregando...</h1>
      </div>
    )
  }
  return (
    <div className='AppHome'>
      <div className='listFilms'>
      {films.map((film) => {
        return (
          <article key={film.id}>
            <span>{film.title}</span>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
            <Link to={`/films/${film.id}`}>Acessar</Link>
          </article>
        )
      })}
      </div>
    </div>
  )
}
export default Home