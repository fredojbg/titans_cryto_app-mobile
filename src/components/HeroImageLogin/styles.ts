import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const window = Dimensions.get('window');


export const HeroContainer = styled.View`
    margin-top: ${window.height * 0.1}px;
`;
