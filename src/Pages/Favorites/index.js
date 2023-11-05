import { Link } from 'react-router-dom'
import './style.css'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
function Favorites() {
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('myList'))
    setFavorites(favs)
  }, [])
  function removeMovie(id) {
    let filterMovie = favorites.filter((item) => {
      return (
        item.id !== id
      )
    })
    setFavorites(filterMovie)
    localStorage.setItem('myList', JSON.stringify(filterMovie))
    toast.success('Filme removido com sucesso')
  }
  return (
    <div className="filmsFavorites">
      <h1>Filmes favoritos</h1>
      {
        favorites.length === 0 && <span>Você não possui filmes favoritos :( </span>
      }
      <ul>
        {favorites.map((fav) => {
          let text = fav.title
          let newTextLength = 25
          return (
            <li key={fav.id}>
              {/* <img src={`https://image.tmdb.org/t/p/w300${fav.poster_path}`} alt={fav.title} /> */}
              <span>{text.length > newTextLength ? text.substring(0, newTextLength) + '...' : text}</span>
              <div>
                <Link to={`/films/${fav.id}`}>Detalhes</Link>
                <button onClick={() => removeMovie(fav.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Favorites