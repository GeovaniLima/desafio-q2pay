import { 
  HStack,
  Text, 
  Icon,
  VStack,
  Box
} from "native-base";

import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TaskProps = {
  id: string;
  description: string;
  dateLimit: string;
  status: string;
  timeLimit: string;
}

type Props = {
  data: TaskProps;
}

export function CardTask({ data }: Props) {
  return(
    <VStack
      height={140}
      bg="white"
      borderLeftColor="primary_blue"
      borderLeftWidth={5}
      rounded="sm"
      mb={4}
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        my={8}
        mx={4}
      >
        <TouchableOpacity>
          <Icon 
            as={MaterialCommunityIcons}
            name="checkbox-blank-outline"
            color="border"
            size={7}
          />
        </TouchableOpacity>
        <Text
          color="text"
          fontWeight="normal"
          fontSize="regular2"
        >
          {data.description}
        </Text>
        <TouchableOpacity>
          <Icon 
            as={Ionicons}
            name="md-trash-bin-outline"
            color="red"
            size={7}
          />
        </TouchableOpacity>
      </HStack>

      <Box
        borderBottomColor="border"
        borderBottomWidth={1}
      ></Box>

      <HStack
        mx={4}
        my={2}
        alignItems="center"
      >
        <Icon 
          as={MaterialCommunityIcons}
          name="clock-outline"
          color="text"
          size={7}
          mr={1}
        />
        <Text
          color="text"
          fontSize="regular2"
          mr={4}
        >
          {data.timeLimit}
        </Text>

        <Icon 
          as={MaterialCommunityIcons}
          name="calendar-multiselect"
          color="text"
          size={7}
          mr={1}
        />
        <Text
          color="text"
          fontSize="regular2"
        >
          {data.dateLimit}
        </Text>
      </HStack>

    </VStack>
  )
}