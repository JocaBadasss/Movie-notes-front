import { Container } from "./styles"

export function Button({ title, icon: Icon, loading, ...rest }) {
  return (
    <Container
      type="button"
      $loading={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}
