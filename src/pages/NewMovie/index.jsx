import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { NewTag } from "../../components/NewTag"
import { FiArrowLeft } from "react-icons/fi"

import {
  Container,
  Main,
  Title,
  Inputs,
  Form,
  TextArea,
  Tags,
  Buttons,
} from "./styles"

export default function NewMovie() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState()

  const [isLoading, setIsLoading] = useState(false)

  //armazenará todas as tags
  const [tags, setTags] = useState([])
  //armazenará uma tag
  const [newTag, setNewTag] = useState("")

  function handleRating(e) {
    let value = e.target.value

    if (value === undefined || value === null || isNaN(value) || value === "") {
      setRating("")
      return
    }

    if (value < 1 || value > 5) {
      alert("Only integer numbers between 1 to 5")
      setRating("")
      return
    }

    setRating(value)
  }

  // consiste em ela pegar o valor da newTag e despejar no array com as outras tags,e limpar a const que armazena uma tag
  function handleAddNewTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  function handleNewMovie() {
    if (newTag) {
      return alert("You wrote a tag but did not add it")
    }

    setIsLoading(true)

    const movieNote = {
      title,
      description,
      rating,
      tags,
    }

    try {
      api.post("/movies", movieNote)
      alert("Movie note created sucessufuly")
      navigate("/")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Something went wrong")
      }
    }
  }

  function handleDeleteMovie() {
    confirm = window.confirm("Are you sure you want to delete it?")
    if (confirm) {
      navigate(-1)
    }
  }

  return (
    <Container>
      <Header />
      <Title>
        <Link to="/">
          <FiArrowLeft size={20} />
          Back
        </Link>
        <h1>New movie</h1>
      </Title>
      <Main>
        <Form>
          <Inputs>
            <Input
              placeholder="Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Your rating (0 to 5)"
              type="number"
              value={rating}
              min="1"
              max="5"
              onChange={handleRating}
            />
          </Inputs>
          <TextArea
            placeholder="Observations"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Tags>
            <h2>Tags</h2>
            <div>
              {tags.map((tag, index) => (
                //mapeia todas as tags e o indice
                // só aparece se o array tiver algo
                <NewTag
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag)
                  }}
                />
              ))}

              <NewTag
                isNew="true"
                placeholder="New tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddNewTag}
              />
            </div>
          </Tags>
          <Buttons>
            <Button
              title="Delete movie"
              onClick={handleDeleteMovie}
            />
            <Button
              onClick={handleNewMovie}
              title={isLoading ? "Loading..." : "Save changes"}
              loading={isLoading}
              disabled={isLoading}
            />
          </Buttons>
        </Form>
      </Main>
    </Container>
  )
}
