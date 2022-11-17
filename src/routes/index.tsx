import { useTheme, Box } from "native-base";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;

  theme.colors.background = colors.primary[400];

  return (
    <Box flex={1} bg={colors.primary[400]}>
    <NavigationContainer theme={theme}>
      <AuthRoutes/>
      </NavigationContainer>
      </Box>
  )
}