import React, { useState } from 'react';
import { Alert } from 'react-native';
import firestore  from '@react-native-firebase/firestore';
import { 
  VStack, 
  Text,
  Box
} from "native-base";
import { Button } from "../components/Button";

import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function NewTask() {
  const [description, setDescription] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [dateLimit, setDateLimit] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewTask() {
    setIsLoading(true);

    firestore()
      .collection('tasks')
      .add({
        description,
        timeLimit,
        dateLimit,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => Alert.alert("Nova Tarefa", "Tarefa criada com sucesso"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return(
    <VStack
      flex={1}
      bg="background"
      px={6}
    >

      <Header />

      <Text
        color="text"
        fontSize="title2"
        fontWeight="normal"
      >
        Crie uma tarefa
      </Text>

      <Text
        color="text"
        fontSize="small"
        fontWeight="normal"
      >
        Descreva brevemente a sua tarefa e adicione um prazo.
      </Text>

      <Box
        mt={12}
      >
        <Text
          color="text"
          fontSize="regular2"
          fontWeight="normal"
          mb={2}
        >
          Dê um título para a sua tarefa
        </Text>
        <Input 
          placeholder='Descrição tarefas'
          onChangeText={setDescription}
        />

        <Text
          color="text"
          fontSize="regular2"
          fontWeight="normal"
          mt={8}
          mb={2}
        >
          Horário limite
        </Text>
        <Input 
          placeholder='12:00'
          onChangeText={setTimeLimit}
        />

        <Text
          color="text"
          fontSize="regular2"
          fontWeight="normal"
          mt={8}
          mb={2}
        >
          Data limite
        </Text>
        <Input 
          placeholder='12/01/2023'
          onChangeText={setDateLimit}
        />
      </Box>

      <Button 
        title="Salvar tarefa"
        isLoading={isLoading}
        onPress={handleNewTask}
        mt={24}
      />

    </VStack>
  )
}