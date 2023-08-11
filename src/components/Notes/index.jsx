import { Container, Title, Svg } from "./styles"
import { Tag } from "../Tag"
import { Star } from "../Star"

export function Notes({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <Title>
        <h1>{data.title}</h1>
        <Star
          rating={data.rating}
        
        />
      </Title>
      <p>{children}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag
              key={tag.id}
              title={tag.name}
            />
          ))}
        </footer>
      )}
    </Container>
  )
}
