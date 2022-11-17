import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Text,
  Center,
  Icon,
  Flex,
  Box,
  ScrollView,
  IButtonProps
} from "native-base";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/images/background.png";
import HeadImg from "@assets/images/onboarding/improve-img.svg";
import { Button } from "@components/Button";


type Props = IButtonProps & {
  title: string;
  size?: string;
  ref?: any;
};

function ImproveButton({title}: Props) {
  const [isPressed, setIsPressed] = useState(false);

  function handleClickImprove() {
    setIsPressed(!isPressed);
  }

  return (
    <Button
      variant="outline"
      size="md"
      m={2}
      w={160}
      title={title}
      onPress={handleClickImprove}
      isPressed={isPressed}
      bg={isPressed ? "primary.500" : "transparent"}
    />
  );
}

export default function SubscriptionScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleClickStart() {
    navigation.navigate("subscription");
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
        <HeadImg width={350} height={200} />
      </Center>
      <Center>
        <Text color="gray.100" textAlign="center" fontSize="lg" mx={6} my={6}>
          Quais áreas da sua vida você gostaria de melhorar?
        </Text>
      </Center>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 2,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ImproveButton title="Geral" />
        <ImproveButton title="Crescimento pessoal" />
        <ImproveButton title="Estresse e ansiedade" />
        <ImproveButton title="Positividade corporal" />
        <ImproveButton title="Pensamento positivo" />
        <ImproveButton title="Atrair o amor" />
        <ImproveButton title="Felicidade" />
        <ImproveButton title="Gratidão" />
      </ScrollView>
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
