import * as Styled from "./styles";

import { ButtonProps } from "src/@types/Components/Button";

export default function Button({ color = 'PRIMARY', title = 'Adicionar', ...rest }: ButtonProps) {
  return (
    <Styled.Container color={color} {...rest}>
      <Styled.Title>
        { title }
      </Styled.Title>
    </Styled.Container>
  )
}

