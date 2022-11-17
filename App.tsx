import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import { Routes } from "./src/routes";

import { THEME } from "./src/theme";

import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" translucent />
      <Routes /> 
    </NativeBaseProvider>
  );
}
