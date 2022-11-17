import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading } from "native-base";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/images/background.png";
import FirstScreenImg from "@assets/images/onboarding/first-screen-img.svg";
import { Button } from "@components/Button";

export default function TabOneScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleClickStart() {
    navigation.navigate("configNotifications");
  }

  return (
    <VStack flex={1} px={6}>
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Background app"
        resizeMode="cover"
        position="absolute"
        height={"100%"}
        opacity="0.5"
      />
      <Center my={24} mb={6}>
        <FirstScreenImg width={250} height={250} />
      </Center>
      <Center>
        <Heading color="gray.100" my={10}>
          Gratidão
        </Heading>
        <Text color="gray.100" textAlign="center" fontSize="lg" mx={6}>
          Leia e repita as afirmações várias vezes ao dia para ajudar você a
          desenvolver uma atitude positiva.
        </Text>
      </Center>
      <Button
        mx={6}
        my={16}
        position="absolute"
        bottom={0}
        title="Começar"
        onPress={handleClickStart}
      />
    </VStack>
  );
}
