import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from "styled-components/native";

import { UsersThree } from "phosphor-react-native"
import { Device } from "@utils/index.ts";

export const TouchableWithoutFeedbackContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const KeyboardContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Device.behavior
})`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;

  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`;
