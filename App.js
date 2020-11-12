import React from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {authorize, prefetchConfiguration} from 'react-native-app-auth';

const config = {
  warmAndPrefetchChrome: true,
  issuer: 'http://localhost:8080/auth/realms/master',
  clientId: 'com.appauth',
  redirectUrl: 'com.appauth://login',
  scopes: ['email', 'profile'],
};

const App = () => {
  const onPrefetch = () => {
    prefetchConfiguration(config);
    console.log('onPrefetch: Complete');
  };

  const onSignIn = () => {
    try {
      authorize(config).then((response) => {
        console.log('onSignIn: authorize: response: ', response);
      });
    } catch (error) {
      console.log('onSignIn: error: ');
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Button title={'Prefetch'} onPress={() => onPrefetch()} />
        <Button title={'Login'} onPress={() => onSignIn()} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
