import * as Styled from "./styles";

import HighLightProps from "src/@types/Components/Highlight";

export default function Highlight({ title, subtitle }: HighLightProps) {
  return (
    <Styled.Container>
      <Styled.Title>
        {title}
      </Styled.Title>
      <Styled.Subtitle>
        {subtitle}
      </Styled.Subtitle>
    </Styled.Container>
  )
}

