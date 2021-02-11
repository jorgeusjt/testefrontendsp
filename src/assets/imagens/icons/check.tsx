import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Check = () => {
  return (
    <Svg
      width={118}
      height={118}
      viewBox="0 0 100 100"
      fill="#7BBDF5"
      stroke="#7BBDF5"
      fillRule={'evenodd'}
      strokeWidth={0}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M50 6C25.7 6 6 25.7 6 50s19.7 44 44 44 44-19.7 44-44S74.3 6 50 6zm0 85C27.4 91 9 72.6 9 50S27.4 9 50 9s41 18.4 41 41-18.4 41-41 41z" />
      <Path d="M71.4 36.4l-28.9 29-13.9-14c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l15 15c.3.3.7.4 1.1.4s.8-.1 1.1-.4l30-30c.6-.6.6-1.5 0-2.1-.7-.5-1.7-.5-2.3 0z" />
    </Svg>
  );
};

export default Check;
