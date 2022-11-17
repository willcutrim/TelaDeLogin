import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    min-height: 56px;
    width: 100%;

    background-color: #FFB84D;
    
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    margin-top: 58px;
`;

export const Title = styled.Text`
    color: #7A1818;
    font-size: 20px;
`;