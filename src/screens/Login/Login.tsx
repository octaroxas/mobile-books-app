import React, { Fragment, useContext, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles/styles';
import { globalStyles } from '../../global-styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import GirlBooks from '../../components/animation-components/GirlBooks';


// async function handleLogin(credentials: any) {
//   try {
//     const { data } = await axios.post('https://localhost/api/v1/login', credentials)
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

      <View style={{ height: '40%', }}>
        <GirlBooks />
      </View>

      <View style={globalStyles.headerFormContainer}>
        <Text style={{
          fontSize: 40,
          color: '#375A64',
          fontFamily: 'Lobster_400Regular',
        }}>Bem vindo</Text>
        <Text style={{
          fontSize: 40,
          color: '#375A64',
          fontFamily: 'Lobster_400Regular',
        }}>novamente, Leitor!</Text>
      </View>

      <View style={globalStyles.formContainer}>

        <Input
          label="E-mail"
          value={email}
          onChange={() => { }}
          placeholder='E-mail'
        />

        <Input
          label="Senha"
          value={password}
          onChange={() => { }}
          placeholder='Senha'
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