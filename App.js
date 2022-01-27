import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import ExchangeRates from './components/ExchangeRates';
import CarouselCards from './components/carousal/CarouselCards';

const client = new ApolloClient({
  uri: 'https://apiv2.cricket.com/cricket',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <CarouselCards />
        <View style={{height: 400}}></View>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
