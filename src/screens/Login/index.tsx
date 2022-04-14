/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import { Linking,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput
} from 'react-native';
import Input from '../../components/Input';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {
  MainContainer,
  ErrorScreen,
  FormWrapper,
  Header,
  InputWrapper,
  LoginButton,
  SmallDesc,
  SmallText,
  BottomWrapper,
  TopWrapper,
  FixedView,
  Bottom,
  TermsText,
  TouchableTextContainer,
  ClicklableText,
  TermsContainer,
} from './styles';
import PasswordInput from '../../components/PasswordInput';

interface Props {
  opening: boolean;
}

interface SubmitForm {
  email: string;
  password: string;
}

interface Props {
  opening: boolean;
}

interface ErrorProps {
  message: string;
  status: number;
}

const Login: React.FC<Props> = ({opening}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorProps>({message: '', status: 0});

  // const { signIn } = useAuth();

  const passwordRef = useRef<TextInput>(null);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um endereço de email válido')
      .required('Campo obrigatório'),
    password: Yup.string()
      .min(4, 'Senha muito pequena!')
      .required('Campo obrigatório'),
  });
  return (
    <MainContainer>
      <FixedView>
        <Bottom />
        {/* <RoundMask move={false} startBottom={true} /> */}
      </FixedView>
      {error.status !== 404 && error.status !== 403 ? (
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={async (values, {setFieldError}) => {
            try {
              setLoading(true);
              // await signIn({
              //   email: values.email,
              //   password: values.password,
              // });
            } catch (err) {
              setFieldError('password', 'Email/senha inválidos.');
            } finally {
              setLoading(false);
            }
          }}
          validationSchema={SignupSchema}>
          {({handleSubmit, values, errors}) => (
            <FormWrapper>
              <TopWrapper>
                <Header>Sign in</Header>
                <InputWrapper>
                  <Input
                    name="email"
                    placeholder="Endereço de email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordRef.current?.focus();
                    }}
                    // nextFocus={() => password.current?.focus() }
                  />
                  <PasswordInput
                    ref={passwordRef}
                    name="password"
                    placeholder="Senha"
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      handleSubmit();
                    }}
                  />
                </InputWrapper>
                <SmallText
                  onPress={() => {
                    // navigation.navigate('ForgotPassword');
                  }}
                  style={{
                    alignSelf: 'center',
                    width: '90%',
                  }}>
                  Esqueci minha senha
                </SmallText>
                <TermsContainer>
                  <TermsText>
                    Ao realizar login em sua conta, você está concordando com os
                    nossos
                    <TouchableTextContainer
                      onPress={() => {
                        Linking.openURL(
                          'https://overstress.com.br/termos-de-uso',
                        );
                      }}>
                      <ClicklableText>Termos de Uso.</ClicklableText>
                    </TouchableTextContainer>
                  </TermsText>
                </TermsContainer>
              </TopWrapper>
              <BottomWrapper>
                <LoginButton
                  onPress={() => {
                    handleSubmit();
                  }}
                  disabled={
                    !(
                      values.email &&
                      values.password &&
                      !errors.email &&
                      !errors.password
                    )
                  }>
                  {!loading ? (
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'white',
                      }}>
                      Sign in
                    </Text>
                  ) : (
                    <ActivityIndicator color="white" />
                  )}
                </LoginButton>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    // navigation.navigate('FirstAccess');
                  }}>
                  {/* <InterrogationIcon /> */}
                  <SmallText> Primeiro acesso?</SmallText>
                </TouchableOpacity>
              </BottomWrapper>
            </FormWrapper>
          )}
        </Formik>
      ) : (
        <ErrorScreen>
          {/* <ErrorSvg style={{margin: 50}} /> */}
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Ops!
          </Text>
          <SmallDesc>
            {error.status === 403
              ? 'Esse aplicativo é exclusivo para usuários WA'
              : 'O email inserido não foi encontrado em nosso banco de dados.'}
          </SmallDesc>
          <SmallDesc>
            {error.status === 403
              ? 'Apenas usuários do tipo Wellness Advisors podem utilizar esse aplicativo!'
              : 'Verifique se digitou o seu email corretamente ou entre em contatocom o nosso suporte.'}
          </SmallDesc>
          <LoginButton
            onPress={() => {
              setError({message: '', status: 0});
            }}
            style={{position: 'absolute', bottom: '10%'}}>
            <Text style={{fontSize: 16, color: 'white'}}>Voltar</Text>
          </LoginButton>
          <SmallText
            onPress={() => {
              Linking.openURL('mailto:app@overstress.com.br');
            }}
            style={{
              position: 'absolute',
              bottom: '5%',
              textAlign: 'center',
            }}>
            FALAR COM O SUPORTE
          </SmallText>
        </ErrorScreen>
      )}
    </MainContainer>
  );
};

export default Login;
