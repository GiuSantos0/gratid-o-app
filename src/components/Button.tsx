import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  size?: string;
  ref?: any;
};

function ButtonSolid({ title, size, ...rest }: Props) {
  return (
    <ButtonNativeBase
      size={size}
      h={14}
      bg="primary.100"
      rounded="sm"
      _pressed={{
        bg: "primary.50",
      }}
      {...rest}
    >
      <Text color="primary.700" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}

function Link({ title, size, ...rest }: Props) {
  return (
    <ButtonNativeBase
      size={size}
      h={14}
      rounded="sm"
      variant="link"
      _pressed={{
        textDecoration: "underline",
      }}
      {...rest}
    >
      <Text color="primary.50" fontFamily="heading" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}

function Outlined({ title, size, ref, ...rest }: Props) {
  return (
    <ButtonNativeBase
      size={size}
      variant="outline"
      rounded="sm"
      _pressed={{
        color: "primary.700:alpha.30",
      }}
      ref={ref}
      {...rest}
    >
      <Text color="primary.50" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}

export function Button({
  title,
  variant = "solid",
  size = "full",
  ref,
  ...rest
}: Props) {
  if (variant === "outline") {
    return <Outlined title={title} size={size} ref={ref} {...rest} />;
  } else if (variant === "link") {
    return <Link title={title} size={size} {...rest} />;
  } else {
    return <ButtonSolid title={title} size={size} {...rest} />;
  }
}
