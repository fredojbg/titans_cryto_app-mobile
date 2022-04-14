declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.png';
declare module '*.gif';
declare module 'react-native-typing-animation';
declare module 'react-native-slider' {
  export interface SearchHeaderProps {
    style?: any;
  }
}
