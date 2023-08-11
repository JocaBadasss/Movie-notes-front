import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    // a função recebe o email e password la do sign in
    try {
      // chama a rota sessions e passa o email e password, e pega a resposta numa const
      const response = await api.post("/sessions", { email, password })

      // dessa resposta queremos somente o user e o token de data, pegamos eles e armazenamos
      const { user, token } = response.data

      /* passamos o user para um local storage, lembrando que o user contem :
      
    {"id":2,"name":"maria","email":"maria@email.com","password":"$2a$08$187y5QPR1jDq4bH5c76gpO7oIDLBXXV3mv71hOGqkCJQBLY/kP4aa","avatar":null,"created_at":"2023-08-07 16:41:36","updated_at":"2023-08-07 16:41:36"}
      
      */
      localStorage.setItem("@MovieNotes:user", JSON.stringify(user))

      // e passamos o token que é o token mesmo
      localStorage.setItem("@MovieNotes:token", token)

      // passamos o token para o back end, como se estivessemos passando no auth do insomnia
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`

      // armazenamos em data, pois usaremos em alguns lugares, como por exemplo nas rotas, no profile
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Something went wrong")
      }
    }
  }

  async function updateProfile({ user, avatarFile }) {
    //recebemos o objeto user, com email, senha, nova senha e nome
    try {
      if (avatarFile) {
        //transformando o arquivo em um form, ou seja, é como se estivessemos mandando um requisição multipart pelo insomnia, onde avatar é o nome e o avatarFile é a imagem anexaDA
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        //enviando a imagem para o servidor
        const response = await api.patch("/users/avatar", fileUploadForm)

        //agora dentro do response tera o user, onde o response.data.avatar tera o conteudo atualizado, e adicionaremos esse conteudo para o objeto que vem como parametro na aplicação e ate entao nao existia
        //pegando o response.data.avatar e adicionando no objeto
        user.avatar = response.data.avatar
      }

      const { password, old_password, ...userData } = user
      //atualizamos com o objeto novo
      await api.put("/users", user)

      userData.name = userData.name || data.user.name
      userData.email = userData.email || data.user.email

      // atualizamos o local storage com as novas informações
      localStorage.setItem("@MovieNotes:user", JSON.stringify(userData))

      // atualizamos o data, pois é importante que tenhamos os dados atualizados do user
      setData({ user: userData, token: data.token })

      alert("Profile updated sucessufuly")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Something went wrong")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@MovieNotes:user")
    localStorage.removeItem("@MovieNotes:token")

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@MovieNotes:user")
    const token = localStorage.getItem("@MovieNotes:token")

    if (user && token) {
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
