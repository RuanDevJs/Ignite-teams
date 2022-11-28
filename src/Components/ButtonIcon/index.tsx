import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import * as Styled from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: Styled.ButtonIconTypeStyleProps;
}

export default function ButtonIcon({ icon, type="PRIMARY", ...props }: Props) {
  return (
    <Styled.Container {...props}>
      <Styled.Icon
        name={icon}
        color="#fff"
        size={32}
        type={type}
      />
    </Styled.Container>
  )
}
