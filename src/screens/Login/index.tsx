import { Bottom } from '@components/Button';
import { Logo } from '../../components/Image';
import { InputText } from '../../components/TextInput';
import { Container,Content } from './styles';


export function Login(){
    return(
        <Container>
            <Logo/>
            <Content>
                <InputText 
                    title='Informe seu e-mail'
                />
                <InputText 
                    title='Informe sua senha'
                />
                <Bottom
                    title='Entrar'
                />

            </Content>
        </Container>

    );
}