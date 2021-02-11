import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CartaoDigito: React.FC<InputProps> = ({
  value,
  circleSize,
  textSize,
  textColor,
}) => {
  const stylePropsCircle = {
    width: circleSize,
    height: circleSize,
  };
  const stylePropsText = {
    fontSize: textSize,
    color: textColor,
  };
  const value2 = value.replace(/\D/g, '');
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View style={styles.container}>
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
      </View>

      <View style={styles.container}>
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
      </View>

      <View style={styles.container}>
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
        <Text style={[styles.cardCircle3, stylePropsCircle]} />
      </View>
      <View style={styles.container}>
        <Text
          style={
            value2.charAt(12) == ''
              ? [styles.cardCircle3, stylePropsCircle]
              : [stylePropsText, styles.constText]
          }>
          {value2.charAt(12)}
        </Text>
        <Text
          style={
            value2.charAt(13) == ''
              ? [styles.cardCircle3, stylePropsCircle]
              : [stylePropsText, styles.constText]
          }>
          {value2.charAt(13)}
        </Text>
        <Text
          style={
            value2.charAt(14) == ''
              ? [styles.cardCircle3, stylePropsCircle]
              : [stylePropsText, styles.constText]
          }>
          {value2.charAt(14)}
        </Text>
        <Text
          style={
            value2.charAt(15) == ''
              ? [styles.cardCircle3, stylePropsCircle]
              : [stylePropsText, styles.constText]
          }>
          {value2.charAt(15)}
        </Text>
      </View>
    </View>
  );
};

export default CartaoDigito;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },
  cardCircle3: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 2.3,
  },
  constText: {
    fontFamily: 'HelveticaNeueBd',
  },
});
