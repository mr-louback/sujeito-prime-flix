import { useParams } from "react-router-dom"
import api from '../../services/api';
import { useEffect, useState } from 'react';
import './style.css';
function Film() {
  const { id } = useParams()
  const [films, setFilms] = useState({})
  const [loading, setloading] = useState(true)
  const apiKey = "83ec4b446f7ef33b231016fb87bf4279"
  useEffect(() => {
    async function loadFilms() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
        }
      })
        .then((response) => {
          setFilms(response.data)
          // console.log(response.data);
          setloading(false)
        })
        .catch(() => {
          console.log('error filme nao encontrado')
        })
    }
    loadFilms()
    return (() => {
      console.log('componente desmontado');
    })
  }, [])
  if (loading) {
    return (
      <div className='film-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  return (
    <div className='film-info'>
      <h1>{films.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${films.backdrop_path}`} alt={films.title} />
      <h3>Sinopse</h3>
      <span>{films.overview}</span>
      <strong>Avaliação: {Math.floor(films.vote_average)} de 10</strong>
    </div>
  )
}
export default Film