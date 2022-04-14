import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const window = Dimensions.get('window');

export const MainContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.Text`
  font-size: 36px;
  font-weight: bold;
  width: 90%;
  margin: 30px 0px 30px 0px;
  color: ${({theme}) => theme.colors.text};
`;

export const FixedView = styled.View`
  position: absolute;
  height: ${window.height}px;
  width: ${window.width}px;
  z-index: -1;
  bottom: 0;
  justify-content: flex-end;
`;

export const Bottom = styled.View`
  background-color: #1B232A;
  flex: 1;
`;

export const FormWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;
export const InputText = styled.TextInput`
  width: 100%;
  text-transform: lowercase;
`;
export const SmallText = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary};
`;
export const InputWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 24px;
`;

export const TopWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 75%;
  justify-content: flex-end;
`;

export const BottomWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
  top: 14%;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 90%;
  background-color: ${props =>
    props.disabled ? '#D2D3D6' : props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  bottom: 10%;
`;

export const TermsContainer = styled.View`
  padding: 15px 15px 0 15px;
  margin: 15px 15px 0 15px;
`;

export const TermsText = styled.Text`
  color: #9597a0;
`;

export const TouchableTextContainer = styled.TouchableOpacity``;

export const ClicklableText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  align-self: center;
  margin-bottom: -4px;
  margin-left: 2.5px;
`;

export const ErrorText = styled.Text`
  width: 90%;
  font-size: 12px;
  color: #fe3b59;
  text-align: right;
`;

export const ErrorScreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

export const SmallDesc = styled.Text`
  width: 90%;
  font-size: 13px;
  text-align: center;
  margin: 20px 0px 10px 0px;
`;
