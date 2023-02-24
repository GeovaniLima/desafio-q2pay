import React, { useState, useEffect } from 'react';
import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { AuthRoutes } from './auth.routes';
import { Home } from '../screens/Home';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.white;

  return(
    <Box
      flex={1}
      bg="background"
    >
      <NavigationContainer theme={theme}>
        {user ? <Home /> : <AuthRoutes /> }
      </NavigationContainer>
    </Box>
  )
}