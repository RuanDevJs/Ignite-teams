import { useNavigation } from "@react-navigation/native";

import HeaderProps from "../../@types/Components/Header";
import Logo from "@assets/logo.png";

import * as Styled from "./styles";

export default function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoback(){
    navigation.navigate('Groups');
  }

  return (
    <Styled.Container>
      {
        showBackButton &&
        <Styled.BackButton onPress={handleGoback} activeOpacity={0.5}>
          <Styled.BackIcon />
        </Styled.BackButton>
      }
      <Styled.Image source={Logo} />
    </Styled.Container>
  )
}

