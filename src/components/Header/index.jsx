import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Input } from "../Input"

import { Container, Profile, Logout } from "./styles"

export function Header({ onChange }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function handleSignOut() {
    const userConfirmed = confirm("Are you sure you want to sign out?")

    if (userConfirmed) {
      signOut()
    }
  }

  function handleTitleClick() {
    navigate("/")
  }

  return (
    <Container>
      <button onClick={handleTitleClick}>
        <h1>MovieNotes</h1>
      </button>

      <Input
        className="search"
        placeholder="Search by title"
        onChange={onChange}
      />

      <div>
        <Logout>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>Log out</button>
        </Logout>
        <Profile to="/profile">
          <img
            src={avatarURL}
            alt="jocabadasss's profile"
          />
        </Profile>
      </div>
    </Container>
  )
}
