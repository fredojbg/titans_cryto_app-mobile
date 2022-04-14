import React, {useState} from 'react';
import {Animated, Dimensions, Image} from 'react-native';
import {HeroContainer} from './styles'

interface Props {
  move: boolean;
  startBottom: boolean;
}

const HeroImageLogin: React.FC<Props> = ({move, startBottom}) => {
  const window = Dimensions.get('window');
  const [yPosition, setYPosition] = useState(
    new Animated.Value(window.height * (startBottom ? -0.2 : 0.3)),
  );
  const startingBottom = window.height * 0.2;
  if (move) {
    Animated.timing(yPosition, {
      toValue: -startingBottom,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }
  return (
  <HeroContainer>
    <Image source={require('../../assets/Login/hero-login.png')} />
  </HeroContainer>
  );
};

export default HeroImageLogin;
