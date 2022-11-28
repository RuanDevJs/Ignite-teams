import { TextInput } from "react-native";
import { InputProps } from "src/@types/Components/Input";

import * as Styled from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends InputProps {
  inputRef?: React.RefObject<TextInput>
}

export default function Input({ inputRef, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Styled.Container
      {...rest}
      ref={inputRef}
      placeholderTextColor={theme.COLORS.GRAY_300}
    />
  )
}
