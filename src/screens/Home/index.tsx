import { Container } from './styles';

import { useNavigation } from '@react-navigation/native';
import { Bottom } from '@components/Button';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { getToken } from '@storage/token/getToken';

const baseUrl = 'http://10.0.2.2:8000/api/users/'

export function Home(){
    const navigation = useNavigation();
    const [users, setUsers] = useState();

    const token = getToken();
    
    async function fetchUsers(){
        try {
           await axios.get(baseUrl,
            { headers : { 'Authorization': `Bearer ${token}` } 
        }).then((response) => {
            console.log(response.data);
           })
            

        } catch (error) {
            console.log(error);
        }
        console.log(token);
    }
    return(
        <Container>
            <Bottom
                title='navegar'
                login={() => fetchUsers()}
            />
        </Container>
    );
}