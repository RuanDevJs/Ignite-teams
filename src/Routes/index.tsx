import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import StackNavigator from "./stack";

export default function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  )
}
