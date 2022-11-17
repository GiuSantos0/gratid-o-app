import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  Flex,
  Box,
  ScrollView,
  Icon,
} from "native-base";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/images/background.png";
import HeadImg from "@assets/images/onboarding/subscribe-img.svg";
import { Button } from "@components/Button";
import { AntDesign } from "@expo/vector-icons";

export default function ImproveAreaLifeScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleClickStart() {
    navigation.navigate("hello");
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
      <Center my={24} mb={0}>
        <HeadImg width={350} height={350} />
      </Center>
      <Box
        justifyContent="start"
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
      >
        <Box flexDirection="row">
          <Icon as={AntDesign} name="checkcircle" color="green.500" size="md" />
          <Text color="gray.100" fontSize="lg" mx={6}>
            Aproveite seus primeiros 3 dias, é grátis
          </Text>
        </Box>
        <Box flexDirection="row">
          <Icon
            as={AntDesign}
            name="checkcircle"
            my={5}
            color="green.500"
            size="md"
          />
          <Text color="gray.100" fontSize="lg" mx={6} my={3}>
            Cancele a qualquer momento no aplicativo
          </Text>
        </Box>
        <Box flexDirection="row">
          <Icon
            as={AntDesign}
            name="checkcircle"
            my={5}
            color="green.500"
            size="md"
          />
          <Text color="gray.100" fontSize="lg" mx={6} my={3}>
            Afirmações que combinam com você
          </Text>
        </Box>
        <Box flexDirection="row">
          <Icon
            as={AntDesign}
            name="checkcircle"
            my={5}
            color="green.500"
            size="md"
          />
          <Text color="gray.100" fontSize="lg" mx={6} my={3}>
            Categorias para qualquer situação
          </Text>
        </Box>
        <Box flexDirection="row">
          <Icon
            as={AntDesign}
            name="checkcircle"
            my={5}
            color="green.500"
            size="md"
          />
          <Text color="gray.100" fontSize="lg" mx={6} my={3}>
            Apenas R$8,74/mês, cobrado anualmente
          </Text>
        </Box>
      </Box>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 2,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></ScrollView>
      <Button
        mx={6}
        my={16}
        position="absolute"
        bottom={0}
        title="Continuar"
        onPress={handleClickStart}
      />
    </VStack>
  );
}
