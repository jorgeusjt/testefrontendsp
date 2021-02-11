import React from 'react';
import {View, Text} from 'react-native'
import {BaseButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export interface Curso {
  id: number
  name: string
  description: string
  duration: string
  imageUrl: string
  price: number
}
export interface Value{
  item: Curso
  index: number
}
export interface RenderItem{
  value: Value
  navigate: any
}

const Card: React.FC<RenderItem> = (props) => {

  const curso = props.value.item
  const navigate = props.navigate
  
  function handleNavigateToPagamentoPage(item: any) {
    navigate('Pagamento', {curso: item});
  }

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{curso.name}</Text>
      <Text style={styles.cardDescription}>{curso.description}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.text1, {fontWeight: 'bold'}]}>Duração: </Text>
        <Text style={styles.text1}>{curso.duration}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text
          style={styles.investimento}>
          Investimento:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.priceConstante}>R$</Text>
          <Text style={styles.price}>
            {curso.price.toLocaleString('pt-BR')}
          </Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <BaseButton
          style={styles.button}
          onPress={() => handleNavigateToPagamentoPage(curso.price)}>
          <Text style={{color: 'white', fontFamily: 'HelveticaNeueMed'}}>
            Comprar
          </Text>
        </BaseButton>
      </View>
    </View>
  );
}

export default Card;