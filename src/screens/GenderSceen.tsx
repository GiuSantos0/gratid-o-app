import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading } from "native-base";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/images/background.png";
import HeadImg from "@assets/images/onboarding/gender-img.svg";
import { Button } from "@components/Button";

export default function GenderScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleClickStart() {
    navigation.navigate("improveAreaLife");
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
      <Center>
        <Text color="gray.100" textAlign="center" fontSize="lg" mx={6} my={6}>
        Qual a sua identidade de gênero atual?        
        </Text>
      </Center>
      <Button
        my={2}
        title="Feminino"
        onPress={handleClickStart}
      />
      <Button
        my={2}
        title="Masculino"
        onPress={handleClickStart}
      />
      <Button
        my={2}
        title="Outra"
        onPress={handleClickStart}
      />
      <Button
        mx={6}
        my={16}
        position="absolute"
        bottom={0}
        title="Prefiro não dizer"
        onPress={handleClickStart}
        variant="link"
      />
    </VStack>
  );
}
