import React, {useState, useEffect} from 'react';
import {FocusAwareStatusBar} from '../../routes/wrapper';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Input from '../components/Input';
import DrawingCartao from '../components/drawingCartao';
import {BaseButton} from 'react-native-gesture-handler';
import styles from './style';

const Pagamento = () => {
  const navigation = useNavigation();
  const route: any = useRoute();

  const [name, setName] = useState('');
  const [numero, setNumero] = useState('');
  const [cvv, setCvv] = useState('');
  const [validade, setValidade] = useState('');

  const [price, setPrice] = useState<number>(0);
  const [discountPercent, setDiscountPercent] = useState<number>(10);
  const [valueDiscount, setValueDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    discountCalculation();
  }, []);

  function handleNavigateToPagamentoPage() {
    navigation.navigate('PagamentoConcluido');
  }

  function discountCalculation() {
    
    let price = route.params.curso;
    setPrice(price);

    let valor = price * discountPercent;
    valor = valor / 100;
    setValueDiscount(valor);

    let total = price - valor;
    setTotal(total);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        translucent
        backgroundColor="#FF8686"
        barStyle="light-content"
      />
      <ScrollView style={{paddingHorizontal: 24}}>
        <DrawingCartao
          numero={numero}
          name={name}
          validade={validade}
          cvv={cvv}
        />
        <Input
          label="Número do cartão de crédito"
          value={numero}
          mask="cartaoCredito"
          keyboardType='numeric'
          inputMaskChange={(text: string) => {setNumero(text)}}
        />
        <Input
          label="Nome"
          value={name}
          keyboardType='default'
          mask="string"
          inputMaskChange={(text: string) => setName(text)}
        />
        <View style={styles.inputContainer}>
          <View style={styles.input50}>
            <Input
              label='Validade'
              value={validade}
              mask='validade'
              keyboardType='numeric'
              inputMaskChange={(text: string) => setValidade(text)}
            />
          </View>
          <View style={[styles.input50, {paddingLeft:8}]}>
            <Input
              label="CVV"
              value={cvv}
              mask="cvv"
              keyboardType='numeric'
              inputMaskChange={(text: string) => setCvv(text)}
            />
          </View>
        </View>
        {/* Linha horizontal */}
        <View style={[styles.lineStyle]} />
        <View style={{marginVertical: 16}}>
          <View style={styles.discountRow}>
            <Text style={styles.textDiscount}>Curso</Text>
            <Text style={styles.textDiscount}>R$ {price.toLocaleString('pt-BR')}</Text>
          </View>
          <View style={styles.discountRow}>
            <Text style={styles.textDiscount}>Desconto {discountPercent}%</Text>
            <Text style={[styles.textDiscount, {color: '#FF8686'}]}>
              - R$ {valueDiscount.toLocaleString('pt-BR')}
            </Text>
          </View>
        </View>
        {/* Linha horizontal */}
        <View style={[styles.lineStyle]} />
        <View style={styles.totalContainer}>
          <Text style={styles.textTotal}>Total:</Text>
          <Text style={styles.textTotal}>R$ {total.toLocaleString('pt-BR')}</Text>
        </View>
        <BaseButton
          style={styles.button}
          onPress={handleNavigateToPagamentoPage}>
          <Text style={styles.textButton}>
            Pagar
          </Text>
        </BaseButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pagamento;
