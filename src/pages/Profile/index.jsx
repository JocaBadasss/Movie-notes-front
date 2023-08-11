import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"

import { Container, Header, Picture, Inputs } from "./styles"

export default function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  // uma const que verificará se o usuario tem um avatar, se tiver, montarará a url do avatar, se não, usará um placeholder
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  // se o usuario ja tiver um avatar, vai ficar aqui
  const [avatar, setAvatar] = useState(avatarURL)

  // aqui sera usado exclusivamente para carregar a nova imagem selecionada
  const [avatarFile, setAvatarFile] = useState(null)

  function handleChangePicture(e) {
    // pegando o primeiro arquivo selecionado pelo usuario
    const file = e.target.files[0]

    // colocando o arquivo que o usuario selecionou na avatarFile
    setAvatarFile(file)

    //toda vez que o usuario mudar de avatar, sera gerado uma url para atualizar esse estado, que atualizara o avatar
    // serve só pra aparecer a foto de cara
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

    //agora passaremos o AvatarFile que contem a imagem sem a url para a função handleUpdate, mais especificamente em updateProfile
  }

  function handleUpdate() {
    const user = {
      name: name,
      email: email,
      old_password: password,
      password: newPassword,
    }

    updateProfile({ user, avatarFile })
  }

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft size={20} />
          Back
        </Link>
      </Header>

      <Picture>
        <img
          src={avatar}
          alt=""
        />
        <label htmlFor="picture">
          <FiCamera size={20} />
          <input
            type="file"
            id="picture"
            onChange={handleChangePicture}
          />
        </label>
      </Picture>

      <Inputs>
        <Input
          placeholder={user.name}
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={user.email}
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          title="Save"
          loading="true"
          onClick={handleUpdate}
        />
      </Inputs>
    </Container>
  )
}
