import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";

type Props = TouchableOpacityProps & Styled.FilterStyleProps & {
  title: string;
}

export default function Filter({ title, isActive, ...props }: Props) {
  return (
    <Styled.Container isActive={isActive} {...props}>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  )
}
