import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background, Title, Inputs } from "./styles"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSignUp()
    }
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("You must fill all fields")
    }

    setIsLoading(true)

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("User created successfully")
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Something went wrong")
        }
      })
  }

  return (
    <Container>
      <Form>
        <Title>
          <h1>MovieNotes</h1>
          <p>Application to track everything you watch.</p>
        </Title>

        <h2>Sign Up</h2>
        <Inputs>
          <Input
            icon={FiUser}
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            type="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />

          <Button
            onClick={handleSignUp}
            title={isLoading ? "Loading..." : "Sign Up"}
            loading={isLoading}
            disabled={isLoading}
          />
        </Inputs>

        <Link to="/">
          <FiArrowLeft size={20} />
          Back to log in
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
