import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

import { ButtonStyledProps } from "src/@types/Components/Button";

export const Container = styled(TouchableOpacity)<ButtonStyledProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, color }) =>
    color === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
