import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background, Title, Inputs } from "./styles"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <Title>
          <h1>RocketMovies</h1>
          <p>Application to track everything you watch.</p>
        </Title>

        <h2>Sign in</h2>
        <Inputs>
          <Input
            type="email"
            icon={FiMail}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            title="Log in"
            onClick={handleSignIn}
          />
        </Inputs>

        <Link to="/register">Sign up</Link>
      </Form>
      <Background />
    </Container>
  )
}
