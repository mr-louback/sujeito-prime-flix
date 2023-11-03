import { useParams } from "react-router-dom"

function Film() {
  const params = useParams()
  return (
    <div>
      <h1>Film params id {params.id} </h1>
    
    </div>
  )
}
export default Film