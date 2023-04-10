import { Fragment, useContext, useEffect, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles/styles';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext'


interface IFormSignUp {
    name: string;
    email: string;
    password: string;
    password_repeat: string
}
const HeaderSignUp = () => {
    return (
        <View>
            <Text style={styles.title}>
                Novo usuário
            </Text>
            <Text style={styles.subTitle}>
                Registre-se para conseguir controlar suas finanças e organizar seus gastos
            </Text>
        </View>
    )

}

const schemaValidation = yup.object({
    name: yup.string().min(6, 'Informe seu nome!').required('Informe seu nome!'),
    email: yup.string().email('E-mail inválido!').required('Informe um endereço de e-mail!'),
    password: yup.string().min(6, 'A senha deve contar com no mínimo 6 dígitos!').required('Informe a senha'),
    password_repeat: yup.string().oneOf([yup.ref('password'), null], 'As senhas informadas precisam ser iguais!').required('Repita a senha informada!'),
})

const SignUp = ({ navigation }: any) => {

  const { handleLogin, setLoading } = useContext(AuthContext);
    

    const { control, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            name: undefined,
            email: undefined,
            password: undefined,
            password_repeat: undefined
        },
        resolver: yupResolver(schemaValidation)
    })
    const [showPassword, setShowPassword] = useState(true)
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(true)
    const { handleSignUp } = useContext(AuthContext)


    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const toggleShowPasswordRepeat = () => {
        setShowPasswordRepeat(!showPasswordRepeat)
    }


    // const handleSignUp = async (form: any) => {
    //     console.log(form)

    //     const credentialsForm = {
    //         name: form.name,
    //         email: form.email,
    //         password: form.password
    //     }

    //     try {
    //         const { data } = await axios.post('https://finance.ianbrito.com.br/api/v1/register', credentialsForm)
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const signUp = async (userRegistrationData: any) => {
       
    }

    const tologin = () => {
        navigation.navigate('login')
    }

    useEffect(() => {

    }, []);


    return (
       
            
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Form de Cadastre-se</Text>
        <TouchableOpacity style={{padding:20}} onPress={handleLogin}>
          <Text>Cadastrar usuairo</Text>
        </TouchableOpacity>

                <TouchableOpacity style={{padding:20}} onPress={handleLogin}>
          <Text>voltar ao Login</Text>
        </TouchableOpacity>


    </View>
        
    )
}

export default SignUp;