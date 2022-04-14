import React, {
  useState,
  useCallback,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from 'formik';

import {Container, TextInput, Icon, ErrorText} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  nextFocus?: () => void;
  disabled?: boolean;
  multiline?: boolean;
  transparent?: boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, disabled, multiline, transparent, ...props},
  ref,
) => {
  const [field, meta] = useField(name);

  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
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
          multiline={multiline}
          transparent={transparent}
          value={field.value}
          onChangeText={field.onChange(name)}
          keyboardAppearance="dark"
          defaultValue={meta.initialValue}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          editable={!disabled}
          {...props}
        />
      </Container>
      {meta.error && meta.touched && <ErrorText>{meta.error}.</ErrorText>}
    </>
  );
};

export default forwardRef(Input);
