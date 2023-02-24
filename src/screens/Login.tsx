import React, { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Logado com sucesso!');
      })
      .catch((error) => console.log(error))
  }

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
          onChangeText={setEmail}
          mb={4}
        />

        <Input 
          placeholder='Senha'
          secureTextEntry
          onChangeText={setPassword}
          autoCapitalize='none'
        />
      </Box>

      <Button 
        title="Entrar"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  )
}