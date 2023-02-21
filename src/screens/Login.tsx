import { 
  Image,
  Text, 
  VStack,
  Box 
} from "native-base";

import logo from '../assets/logo.png';

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
  return(
    <VStack
      flex={1}
      bg="background"
      px={6}
    >
      
      <Image 
        source={logo}
        defaultSource={logo}
        alt="Q2 Pay"
        resizeMode="contain"
        mt={24}
        mb={12}
      /> 

      <Text
        color="text"
        fontSize={24}
        fontWeight="normal"
        lineHeight="29"
      >
        Olá, que bom te ver de novo. Vamos começar?
      </Text>

      <Box
        mt={16}
        mb={24}
      >        
        <Input 
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          mb={4}
        />

        <Input 
          placeholder='Senha'
          secureTextEntry
          autoCapitalize='none'
        />
      </Box>

      <Button 
        title="Entrar"
      />
    </VStack>
  )
}