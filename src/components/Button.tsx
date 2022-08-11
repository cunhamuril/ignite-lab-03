import {
  Button as ButtonNativeBase,
  IButtonProps as INativeBaseButtonProps,
  Heading,
} from "native-base";

interface IButtonProps extends INativeBaseButtonProps {
  title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
  return (
    <ButtonNativeBase
      bg="green.700"
      h={14}
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
