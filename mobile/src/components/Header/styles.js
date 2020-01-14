import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction:row;
    height:60px;
    /* background:red; */
    align-items:center;
`;

export const Perfil=styled.Image `
    width:60px;
    height:60px;
    border-radius:30px;
    border:2px solid #D2D8D8;
`;

export const FilterMonth=styled.TouchableOpacity `
    flex:1;
    border:2px solid #D2D8D8;
    margin: 0px 10px 0px 10px;
    height:40px;
    border-radius:5px;
    /* padding:3px; */
`;

export const TextFilter=styled.TextInput `

`;

export const AddButton=styled.TouchableOpacity `
    width:45px;
    height:38px;
    background:#27AE60;
    border-radius:5px;
    justify-content:center;
    align-items:center;
`;

