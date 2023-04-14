import React, { Fragment, useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import LottieView from 'lottie-react-native';

import { useForm, Controller, FieldValues } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { yupResolver } from '@hookform/resolvers/yup'
import Feather from '@expo/vector-icons/Feather';
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles/styles';
import { globalStyles } from '../../global-styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import GirlBooks from '../../components/animation-components/GirlBooks';

const schemaValidation = yup.object({
  email: yup.string().email('E-mail inválido!').required('Informe um endereço de e-mail!'),
  password: yup.string().min(6, 'A senha deve contar com no mínimo 6 dígitos!').required('Informe a senha'),
})

// async function handleLogin(credentials: any) {
//   try {
//     const { data } = await axios.post('https://finance.ianbrito.com.br/api/v1/login', credentials)
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Login = () => {

  const { handleLogin, setLoading } = useContext(AuthContext);
  const navigation = useNavigation();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    console.log('login')

  }, [])

  const toSignUp = () => {
    navigation.navigate('signup');
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ height: '50%' }}>
        <GirlBooks />
      </View>

      <View style={globalStyles.headerFormContainer}>
        <Text style={globalStyles.headerForm}>Bem vindo</Text>
        <Text style={globalStyles.headerForm}>novamente, Leitor!</Text>
      </View>

      <View style={globalStyles.formContainer}>
        <Input
          label="Senha"
          value={password}
          onChange={() => { }}
          placeholder='Senha'
        />

        <Input
          label="E-mail"
          value={email}
          onChange={() => { }}
          placeholder='E-mail'
        />
        <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={toSignUp}>
            <Text>Esqueci a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toSignUp}>
            <Text>Não tenho cadastro?</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Entrar"
          onPress={handleLogin}
        />
      </View>

    </SafeAreaView>
  )

}



export default Login;