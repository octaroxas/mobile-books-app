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
import Input from '../../components/Input';
import GirlBooks from '../../components/animation-components/GirlBooks';
import { globalStyles } from '../../global-styles';
import Button from '../../components/Button';


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
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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

        <SafeAreaView style={styles.container}>

            <View style={{ height: '40%', }}>
                <GirlBooks />
            </View>

            <View style={globalStyles.headerFormContainer}>
                <Text style={{
                    fontSize: 40,
                    color: '#375A64',
                    fontFamily: 'Lobster_400Regular',
                }}>Cadastre-se!</Text>
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

                <Input
                    label="Confirmar Senha"
                    value={password}
                    onChange={() => { }}
                    placeholder='Confirmar Senha'
                />

                <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={tologin}>
                        <Text>Já tenho cadastro?</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    title="cadastra"
                    onPress={handleSignUp}
                />
            </View>

        </SafeAreaView>

    )
}

export default SignUp;