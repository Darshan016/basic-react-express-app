import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [animes, setAnimes] = useState([])
  useEffect(()=>{
    axios.get('/api/animes')
    .then((res)=>{
      setAnimes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
      <h1>Basic Fullstack</h1>
      <p>Animes: {animes.length}</p>
      {
        // eslint-disable-next-line no-unused-vars
        animes.map((anime,index)=>(
          <div key={anime.id}>
            <h3>{anime.name}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
