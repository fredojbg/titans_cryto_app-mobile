import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
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
})`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: #fe3b59;
  font-size: 10px;
  margin-top: -8px;
  align-self: flex-end;
`;
