import { useNavigate, useParams } from "react-router-dom";
import api from '../../services/api';
import { useEffect, useState } from 'react';
import './style.css';
import Loading from "../../components/Loading";

function Film() {
  const { id } = useParams();
  const [films, setFilms] = useState({});
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const apiKey = "83ec4b446f7ef33b231016fb87bf4279";
  useEffect(() => {
    async function loadFilms() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
        }
      })
        .then((response) => {
          setFilms(response.data);
          setloading(false);
        })
        .catch(() => {
          // console.log('error filme nao encontrado');
          navigate('/', {
            replace: true
          });
          return;
        });
    }
    loadFilms();
    return (() => {
      console.log('componente desmontado');
    });
  }, [id,navigate]);
  if (loading) {
    return <Loading/>
  }
  return (
    <div className='filmInfo'>
      <h1>{films.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${films.backdrop_path}`} alt={films.title} />
      <h3>Sinopse</h3>
      <span>{films.overview}</span>
      <strong>Avaliação: {Math.floor(films.vote_average)} de 10</strong>
      <div className='areaButton'>
        <button className='button'>Adicionar a lista</button>
        <button className='button'>
          <a href={`https://www.youtube.com/results?search_query=${films.title}+trailer`} target='blank' rel='noreferrer external noopener'>Trailer</a>
        </button>

      </div>
    </div>
  );
}

export default Film