import React from 'react';
import {View} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';

const Carrinho = () => {
  return (
    <View style={{paddingRight: 8, paddingTop: 8}}>
      <Svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        fillRule={'evenodd'}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Circle cx={9} cy={15} r={1.6} />
        <Circle cx={16} cy={15} r={1.6} />
        <Path d="M.5.5h4.538l2.379 12.257h9.935l2.372-8.234h-11.3" />
      </Svg>
    </View>
  );
};

export default Carrinho;
