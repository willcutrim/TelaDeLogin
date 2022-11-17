import { Conatiner, Imagem } from './styles';
import logoImg  from '@assets/logo.png';   

export function Logo(){
    return(
        <Conatiner>
            <Imagem
                source={logoImg}
            />
        </Conatiner>
    );
}