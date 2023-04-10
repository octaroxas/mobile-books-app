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

import { useForm, Controller, FieldValues } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { yupResolver } from '@hookform/resolvers/yup'
import Feather from '@expo/vector-icons/Feather';
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles/styles';
// import { Loading } from '../../contexts/AuthContext';
import GirlImage from '../../../assets/images/girl.png';




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

  useEffect(() => {
    console.log('login')

  }, [])

  const toSignUp = () => {
    navigation.navigate('signup');
  }

  return (
    <View style={styles.container}>


      <Image
        style={styles.image}
        source={require('../../../assets/images/girl.png')}
      />

      <Text>Formulario de Login</Text>

      <View style={styles.formContainer}>
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Senha' />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toSignUp}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  )

}



export default Login;