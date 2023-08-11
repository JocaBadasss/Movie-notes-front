import { Container, Title, Svg } from "./styles"
import { Tag } from "../Tag"

export function Notes({ title, children }) {
  return (
    <Container>
      <Title>
        <h1>{title}</h1>
        <Svg />
      </Title>
      <p>{children}</p>
      <div>
        <Tag title="Fiction" />
        <Tag title="Drama" />
        <Tag title="Family" />
      </div>
    </Container>
  )
}
