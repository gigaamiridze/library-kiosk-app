import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { UserContextProvider, LibraryContextProvider } from './contexts';
import { StackNavigation } from './navigation';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <LibraryContextProvider>
        <QueryClientProvider client={queryClient}>
          <AlertNotificationRoot>
            <NavigationContainer>
              <StackNavigation />
            </NavigationContainer>
          </AlertNotificationRoot>
        </QueryClientProvider>
      </LibraryContextProvider>    
    </UserContextProvider>
  );
}

export default App;
