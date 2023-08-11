import { Container } from "./styles"
import { FiX, FiPlus } from "react-icons/fi"

export function NewTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        onClick={onClick}
        type="button"
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
