import {
  Image
} from 'native-base';

import logo from '../assets/logo.png';

export function Header() {
  return(
    <Image 
      source={logo}
      defaultSource={logo}
      alt="Q2 Pay"
      resizeMode="contain"
      width={46}
      height={37}
      mt={16}
      mb={7}
    /> 
  )
}