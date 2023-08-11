import { Container, StarEmpty, StarFullfield } from "./styles"

export function Star({ rating, ...rest }) {
  
  const starIcons = []

  for (let i = 1; i <= 5; i++) {
    if (i > rating) {
      starIcons.push(<StarEmpty key={i} />)
    } else {
      starIcons.push(<StarFullfield key={i} />)
    }
  }

  return <Container {...rest} >{starIcons}</Container>
}
