import { Input } from './styles';

type Props = {
    title: string;
}

export function InputText( { title }: Props ) {
    return(
        <Input
            placeholder={title}
        />
    );
}