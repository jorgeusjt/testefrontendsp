import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import CartaoDigito from '../cartaoDigito';
import styles from './style';

const {width} = Dimensions.get('window');
const widthLine1 = width / 15;

interface InputProps {
  numero: any;
  name: any;
  validade: any;
  cvv: any;
}

const DrawingCartao: React.FC<InputProps> = ({numero, name, validade, cvv}) => {
  return (
    <View style={{padding: 20}}>
      <View
        style={[
          styles.cardCartao,
          {
            height: width / 2,
          },
        ]}>
        {/*Icons cartão*/}
        <View
          style={styles.rowCartao}>
          <View
            style={[
              styles.cardChipCartao,
              {
                width: widthLine1 * 1.4,
                height: widthLine1,
              },
            ]}
          />
          <View>
            <View
              style={[
                styles.cardCircle1,
                {
                  width: widthLine1,
                  height: widthLine1,
                  position: 'absolute',
                  right: 13,
                },
              ]}
            />
            <View
              style={[
                styles.cardCircle2,
                {
                  width: widthLine1,
                  height: widthLine1,
                },
              ]}
            />
          </View>
        </View>
        {/* Número cartão */}
        <CartaoDigito
          value={numero}
          circleSize={width / 70}
          textSize={20}
          textColor={'#fff'}
        />
        {/*Nome, Validade, CVV*/}
        <View style={styles.rowCartao}>
          <View style={{width: '55%'}}>
            <Text style={styles.cartaoLabel}>Nome</Text>
            <Text style={styles.cartaoText}>{name}</Text>
          </View>
          <View>
            <Text style={styles.cartaoLabel}>Validade</Text>
            <Text style={styles.cartaoText}>{validade}</Text>
          </View>
          <View>
            <Text style={styles.cartaoLabel}>CVV</Text>
            <Text style={styles.cartaoText}>{cvv}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DrawingCartao;
