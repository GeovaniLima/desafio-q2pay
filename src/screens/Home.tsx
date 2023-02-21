import { 
  VStack,
  Text,
  Image,
  ScrollView
} from "native-base";

import logo from '../assets/logo.png';
import { Button } from "../components/Button";

import { CardTask } from "../components/CardTask";
import { Header } from "../components/Header";

export function Home() {
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

      <ScrollView
        mt={8}
        showsVerticalScrollIndicator={false}
      >
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
      </ScrollView>

      <Button 
        title="Criar nova tarefa"
        my={4}
      />
    </VStack>
  )
}