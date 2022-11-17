import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

import { VStack, Image, Text, Center, Heading, Box } from "native-base";

import BackgroundImg from "@assets/images/background.png";
import SecondScreenImg from "@assets/images/onboarding/second-screen-img.svg";
import { Button } from "@components/Button";
import { IconButton } from "@components/IconButton";

export default function ConfigNotificationsScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleClickContinue() {
    navigation.navigate("gender");
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
        <SecondScreenImg width={250} height={250} />
      </Center>
      <Center>
        <Heading color="gray.100" mb={6}>
          Configure suas afirmações
        </Heading>
        <Text color="gray.100" textAlign="center" fontSize="lg" mx={6}>
          O poder das afirmações reside em repeti-las para si mesmo regularmente
          para reforçar a crença positiva.
        </Text>
      </Center>
      <Center my={6}>
        <VStack
          direction="row"
          bg="primary.50"
          borderRadius="md"
          py={1}
          my={2}
          p={6}
          alignItems="center"
        >
          <Box flexGrow={2} width={100}>
            <Text fontSize="lg">Quantos</Text>
          </Box>
          <Box
            flexGrow={3}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={110}
          >
            <IconButton name="minus" />
            <Text fontSize="lg">10x</Text>
            <IconButton name="plus" />
          </Box>
        </VStack>
        <VStack
          direction="row"
          justifyContent="space-around"
          bg="primary.50"
          borderRadius="md"
          py={1}
          my={2}
          p={6}
          alignItems="center"
        >
          <Box flexGrow={3} width={100}>
            <Text fontSize="lg">Inicia em</Text>
          </Box>
          <Box
            flexGrow={2}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={150}
          >
            <IconButton name="minus" />
            <Text fontSize="lg">09:00</Text>
            <IconButton name="plus" />
          </Box>
        </VStack>
        <VStack
          direction="row"
          bg="primary.50"
          borderRadius="md"
          py={1}
          my={2}
          p={6}
          alignItems="center"
        >
          <Box flexGrow={3} width={100}>
            <Text fontSize="lg">Termina em</Text>
          </Box>
          <Box
            flexGrow={2}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={150}
          >
            <IconButton name="minus" />
            <Text fontSize="lg">09:00</Text>
            <IconButton name="plus" />
          </Box>
        </VStack>
      </Center>
      <Button
        mx={6}
        my={16}
        position="absolute"
        bottom={0}
        title="Continuar"
        onPress={handleClickContinue}
      />
    </VStack>
  );
}
