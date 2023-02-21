import { 
  Input as NativeBaseInput,
  IInputProps,
} from 'native-base';

type Props = IInputProps & {};

export function Input({ ...rest }: Props) {

  return(
    <NativeBaseInput 
      bg="transparent"
      h={12}
      px={4}
      borderWidth={1}
      borderColor="border"
      rounded="sm"
      fontSize="md"
      color="text"
      placeholderTextColor="placeholder"  
      _invalid={{
        borderWidth: 1,
        borderColor: "red"
      }}   
      _focus={{
        bg: "transparent",
        borderWidth: 1,
        borderColor: "primary_blue"
      }}
      {...rest}
    />
  )
}