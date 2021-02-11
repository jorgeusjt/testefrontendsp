import React from 'react';
import {FocusAwareStatusBar} from '../../routes/wrapper';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Check from '../../assets/imagens/icons/check';
import {BaseButton} from 'react-native-gesture-handler';
import styles from './style';

const PagamentoConcluido = () => {
  const navigation = useNavigation();

  function handleNavigateToPagamentoPage() {
    navigation.navigate('Loja');
  }

  return (
    <>
      <FocusAwareStatusBar
        translucent
        backgroundColor="#FF8686"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={styles.containerSuccess}>
          <Text style={styles.textTitle}>Sucesso!</Text>
          <Text style={styles.textTitle}>Compra concluída</Text>
          <View style={styles.checkContainer}>
            <Check />
          </View>
          <Text style={styles.textSubTitle}>Você receberá um email</Text>
          <Text style={styles.textSubTitle}>
            com os detalhes da sua compra.
          </Text>
        </View>

        <BaseButton
          style={styles.button}
          onPress={handleNavigateToPagamentoPage}>
          <Text style={styles.textButton}>
            Ok
          </Text>
        </BaseButton>
      </View>
    </>
  );
};

export default PagamentoConcluido;
