import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {TextInputProps, TextInput} from 'react-native';
import {useField} from 'formik';
import EyeIcon from '../../assets/Login/eye-slash.svg';
import {Container, ErrorText} from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputRef {
  focus(): void;
}

const PasswordInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {name, ...props},
  ref,
) => {
  const [field, meta] = useField(name);

  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!field.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <>
      <Container isFocused={isFocused} isErrored={!!meta.error}>
        <TextInput
          ref={inputElementRef}
          value={field.value}
          onChangeText={field.onChange(name)}
          secureTextEntry={!showPass}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
          defaultValue={meta.initialValue}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          {...props}
        />
        <EyeIcon />
      </Container>
      {meta.error && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};

export default forwardRef(PasswordInput);
