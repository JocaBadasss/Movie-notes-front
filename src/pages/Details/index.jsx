import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"

import { format } from "date-fns"

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft, FiClock, FiX } from "react-icons/fi"
import { StarBig } from "../../components/StarBig"

import { Container, Title, By, Main, Tags } from "./styles"
import { api } from "../../services/api"

export default function Details() {
  const [data, setData] = useState(null)
  const [formattedDate, setFormattedDate] = useState(null)

  const { user } = useAuth()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies/${params.id}`)

      setData(response.data)

      const createdAt = new Date(response.data.created_at)
      const formattedCreatedAt = format(createdAt, "dd/MM/yy 'at' HH:mm")
      setFormattedDate(formattedCreatedAt)
    }

    fetchNotes()
  }, [])

  function handleBack() {
    navigate(-1)
  }

  async function handleRemoveNote(id) {
    const confirm = window.confirm("Are you sure you want to delete it?")
    if (confirm) {
      await api.delete(`/movies/${id}`)
      navigate("/")
    }
  }

  return (
    <Container>
      <Header />
      {data && (
        <Title>
          <div>
            <ButtonText
              icon={FiArrowLeft}
              title="Back"
              onClick={handleBack}
            />
            <ButtonText
              icon={FiX}
              title="Remove note"
              onClick={() => {
                handleRemoveNote(params.id)
              }}
            />
          </div>
          <h1>
            {data.title} <StarBig rating={data.rating} />
          </h1>
          <By>
            <p>
              <img
                src={avatarURL}
                alt=""
              />
              By {user.name}
            </p>
            <span>
              <FiClock /> {formattedDate}
            </span>
          </By>
          {data.tags && (
            <Tags>
              {data.tags.map((tag) => (
                <Tag
                  key={tag.id}
                  title={tag.name}
                />
              ))}
            </Tags>
          )}
        </Title>
      )}
      {data && (
        <Main>
          <p>{data.description}</p>
        </Main>
      )}
    </Container>
  )
}
