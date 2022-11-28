import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import Loading from "@components/Loading";

//@ts-ignore
import AppRoutes from "@routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <AppRoutes /> : <Loading /> }
    </ThemeProvider>
  );
}

