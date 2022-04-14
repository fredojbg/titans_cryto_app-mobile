import {TextInput as ReactTextInput, Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  transparent?: boolean;
}

interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: #161C22;
  padding: ${() => (Platform.OS === 'ios' ? '10px' : '0px 10px')};
  margin: 10px 0px;

  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.border};
  ${props =>
    props.isErrored &&
    css`
      border-color: #fe3b59;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #d4cdfc;
    `}
`;

export const TextInput = styled.TextInput.attrs(({theme}) => {
  return {
    placeholderTextColor: theme.colors.placeHolderText,
  };
})<TextInputProps>`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: #fe3b59;
  font-size: 10px;
  margin-top: 2px;
  align-self: flex-end;
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  margin-right: 16px;

  color: #b3b5bb;

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      color: #7962f7;
    `}
`;
