import { AntDesign } from "@expo/vector-icons";
import { Icon, IconButton as IconButtonNativeBase, IIconButtonProps, Text } from "native-base";

type Props = IIconButtonProps & {
  name: string;
};

export function IconButton({name = "minus", ...rest }: Props) {
  return (
    <IconButtonNativeBase h={10} icon={<Icon as={AntDesign} name={name} color="primary.50"/> } bg="primary.500" rounded="sm" _pressed={{
      bg: "primary.400"
    }} {...rest}/>

  );
}
