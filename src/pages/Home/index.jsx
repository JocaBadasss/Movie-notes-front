import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { Notes } from "../../components/Notes"
import { FiPlus } from "react-icons/fi"

import { Container, Content, Head, Button } from "./styles"

import { api } from "../../services/api"

export default function Home() {
  const navigate = useNavigate()

  const [tags, setTags] = useState("")

  const [search, setSearch] = useState("")

  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movies/?title=${search}&tags=${tags}`)

      setNotes(response.data)
    }

    fetchMovieNotes()
  }, [search, tags])

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <Head>
        <h1>My movies</h1>
        <Button to="new-movie">
          <FiPlus size={20} /> Add movie
        </Button>
      </Head>
      <Content>
        {notes.map((note) => (
          <Notes
            key={note.id}
            data={note}
            onClick={() => {
              handleDetails(note.id)
            }}
          >
            {note.description}
          </Notes>
        ))}
      </Content>
    </Container>
  )
}
