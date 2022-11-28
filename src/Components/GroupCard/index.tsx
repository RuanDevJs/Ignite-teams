import { TouchableOpacityProps } from 'react-native'
import * as Styled from "./styles";

type Props = { title: string } & TouchableOpacityProps;

export default function GroupCard({ title, ...props }: Props) {
  return (
    <Styled.Container {...props}>
      <Styled.Icon />
      <Styled.Title >{title}</Styled.Title>
    </Styled.Container>
  )
}
