import { Bottom } from '@components/Button';
import { Logo } from '../../components/Image';
import { InputText } from '../../components/TextInput';
import { Container, Content } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from "axios";
import { useCallback, useState } from 'react';
import { tokenCreate } from '@storage/token/tokenCreate';
import { getToken } from '@storage/token/getToken';

const baseUrl = 'http://10.0.2.2:8000/token/'

export function Login(){

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const [token, setToken] = useState('');

    const navigation = useNavigation();
    async function loginPost(){
        try {
            await axios.post(baseUrl, 
                {
                    username: username,
                    password: senha
                },
            ).then((response) => {
                if (response.status === 200) {
                    navigation.navigate('Home');
                    tokenCreate(response.data.access);
                }
            });
            
            

        } catch (error) {
            console.log(error);
        }
    }

    // useFocusEffect(useCallback(() => {
    //     loginPost();
    // },[]));

    async function tokenVer() {
        const ver = await getToken();
        console.log(ver);
    }
    return(
        <Container>
            <Logo/>
            <Content>
                <InputText 
                    title='Usuário'
                    onChangeText={setUsername}
                    defaultValue={username}
                />
                <InputText 
                    title='Senha'
                    onChangeText={setSenha}
                    defaultValue={senha}
                />
                <Bottom
                    title='Entrar'
                    login={() => loginPost()}
                />

                <Bottom
                    title='ver token'
                    login={() => tokenVer()}
                />

            </Content>
        </Container>

    );
}