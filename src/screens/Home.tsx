import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  VStack,
  Text
} from "native-base";
import { FlatList } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { Button } from "../components/Button";

import { CardTask } from "../components/CardTask";
import { Header } from "../components/Header";

type TaskProps = {
  id: string;
  description: string;
  dateLimit: string;
  status: string;
  timeLimit: string;
}

export function Home() {
  const [status, setStatus] = useState('open');
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscriber = firestore()
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as TaskProps[];

        setTasks(data);
        setIsLoading(false);
      })

      return () => subscriber();
  }, []);
  
  const navigation = useNavigation();
  
  function handleNewTask() {
    navigation.navigate('newTask')
  }

  return (
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
        Tarefas de hoje
      </Text>

      <Text
        color="text"
        fontSize="small"
        fontWeight="normal"
      >
        Segunda-feira, 14 de Fevereiro
      </Text>

      <FlatList 
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardTask data={item} />}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Button 
        title="Criar nova tarefa"
        onPress={handleNewTask}
        my={4}
      />
    </VStack>
  )
}