import { StyleSheet, Text, View } from 'react-native';
import * as Styled from './styles';

type Props = {
  message: string;
}

export default function ListEmpty({ message }: Props) {
  return (
    <Styled.Container>
      <Styled.Message>{message}</Styled.Message>
    </Styled.Container>
  )
}

