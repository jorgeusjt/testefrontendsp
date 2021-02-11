import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const Chevron = () => {
  const navigation = useNavigation();

  function handleNavigateToGoPage() {
    navigation.navigate('Loja');
  }

  return (
    <TouchableOpacity
      style={{paddingLeft: 4, paddingBottom: 6}}
      onPress={handleNavigateToGoPage}>
      <Svg
        width={35}
        height={35}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        fillRule={'evenodd'}
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M15 18l-6-6 6-6" />
      </Svg>
    </TouchableOpacity>
  );
};

export default Chevron;
