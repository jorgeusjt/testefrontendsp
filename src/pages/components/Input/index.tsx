import React, {useState} from 'react';
import {TextInputProps, View, Text, TextInput} from 'react-native';
import styles from './styles'
import {
  maskCartaoCredito,
  maskCvv,
  maskString,
  maskValidade,
} from '../../../utils/masks';

interface InputProps extends TextInputProps {
  mask: 'cartaoCredito' | 'cvv' | 'string' | 'validade';
  inputMaskChange: any;
  label: any;
}

const Input: React.FC<InputProps> = ({mask, inputMaskChange, label, value, ...rest}) => {
  

  const [isFocused, setIsFocused] = useState(false);

  function handleChange(text: string) {

    if (mask === 'cartaoCredito') {
      const value = maskCartaoCredito(text);
      inputMaskChange(value);
    }
    if (mask === 'cvv') {
      const value = maskCvv(text);
      inputMaskChange(value);
    }
    if (mask === 'string') {
      const value = maskString(text);
      inputMaskChange(value);
    }
    if (mask === 'validade') {
      const value = maskValidade(text);
      inputMaskChange(value);
    }
  }

  function handleFocus() {

    setIsFocused(true) 
  };

  function handleBlur () {
    let teste = value?.length
    if( teste == undefined ){
      setIsFocused(false) 
    }else if(teste == 0){
      setIsFocused(false) 
    }
  };

  return (
    <View style={styles.input}>
        <View style={{ paddingTop: 18 }}>
        <TextInput
          style={styles.textInput}
          multiline={false}
          onChangeText={(text: any) => handleChange(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
          value={value}
        {...rest}
        />
        
        <Text style={[
          styles.textLabel,{
          top: !isFocused ? 26 : 11,
          fontSize: !isFocused ? 16 : 8,
        }]}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default Input;
