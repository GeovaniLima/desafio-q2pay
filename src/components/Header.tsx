import {
  HStack,
  Image,
  Icon
} from 'native-base';

import auth from '@react-native-firebase/auth';

import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from '../assets/logo.png';

export function Header() {
  function handleSignOut() {
    auth().signOut();
  }

  return(
    <HStack
      mt={16}
      mb={7}
      justifyContent="space-between"
    >
      <Image 
        source={logo}
        defaultSource={logo}
        alt="Q2 Pay"
        resizeMode="contain"
        width={46}
        height={37}
      /> 

      <TouchableOpacity
        onPress={handleSignOut}
      >
        <Icon 
          as={MaterialCommunityIcons}
          name="logout"
          color="primary_blue"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}