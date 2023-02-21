import {
  Button as ButtonNativeBase,
  IButtonProps,
  Text
} from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return(
    <ButtonNativeBase
      w="full"
      h={12}
      bg={variant === "outline" ? "transparent" : "primary_blue"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="primary_blue"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "white" : "blue_pay",
        color: "white"
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "primary_blue" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}