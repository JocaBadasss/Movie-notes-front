import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft, FiClock } from "react-icons/fi"

import { Container, Title, By, Main, Tags } from "./styles"
import { api } from "../../services/api"

export default function Details() {
  const [data, setData] = useState(null)

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
    }

    fetchNotes()
  }, [])

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      {data && (
        <Title>
          <ButtonText
            icon={FiArrowLeft}
            title="Back"
            onClick={handleBack}
          />
          <h1>{data.title}</h1>
          
          <By>
            <p>
              <img
                src={avatarURL}
                alt=""
              />
              By {user.name}
            </p>
            <span>
              <FiClock /> {data.updated_at}
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
