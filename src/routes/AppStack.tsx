import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loja from '../pages/Loja';
import Pagamento from '../pages/Pagamento';
import PagamentoConcluido from '../pages/PamentoConcluido';

//Icons
import Carrinho from '../assets/imagens/icons/carrinho';
import Chevron from '../assets/imagens/icons/chevron';

const {Navigator, Screen} = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Loja">
        <Screen
          name="Loja"
          component={Loja}
          options={{
            title: 'Loja virtual',
            headerStyle: {
              backgroundColor: '#FF8686',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              //fontWeight: 'bold',
              fontFamily: 'Helvetica Neue',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
            headerRight: () => <Carrinho />,
          }}
        />

        <Screen
          name="Pagamento"
          component={Pagamento}
          options={{
            title: 'Pagamento com cartão',
            headerStyle: {
              backgroundColor: '#FF8686',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              //fontWeight: 'bold',
              fontFamily: 'Helvetica Neue',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
            headerRight: () => <Carrinho />,
            headerLeft: () => <Chevron />,
          }}
        />

        <Screen
          name="PagamentoConcluido"
          component={PagamentoConcluido}
          options={{
            title: 'Pagamento com cartão',
            headerStyle: {
              backgroundColor: '#FF8686',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Helvetica Neue',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
            headerRight: () => <Carrinho />,
            headerLeft: () => <Chevron />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
