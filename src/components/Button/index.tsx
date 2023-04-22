import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    login: () => void;
}

export function Bottom({ title, login, ...rest }: Props){
    return(
        <Container onPress={login}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}