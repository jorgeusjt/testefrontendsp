import React, {useState} from 'react';
import {StyleSheet, TextInputProps, View, Text, TextInput} from 'react-native';

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
          style={{ 
            height: 40,
             fontSize: 16, 
             color: '#707070', 
             borderWidth: 1, 
             borderColor: '#CCCCCC',
             borderRadius:8,
             paddingHorizontal:15,
             paddingVertical:11,
            }}
          multiline={false}
          onChangeText={(text: any) => handleChange(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
        {...rest}
        />
        
        <Text style={{
    marginLeft:10,
    paddingHorizontal:3,
    backgroundColor:'white',
    position: 'absolute',
    left: 0,
    top: !isFocused ? 26 : 11,
    fontSize: !isFocused ? 16 : 8,
    fontFamily:'HelveticaNeue Regular',
    color:'#707070',
        }}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 7,
  },
});
