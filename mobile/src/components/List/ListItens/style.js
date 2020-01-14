import styled from 'styled-components/native';

export const BoxList = styled.TouchableOpacity `
    height:80px;
    background-color:#ECF0F1;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    flex-direction:row;
    align-items:center;
    padding: 0px 10px 0px 0px;
    margin-bottom:10px;
`;

export const BoxListStatus = styled.View `
    width:18px;
    height:80px;
    background-color:#E74C3C;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
`;

export const BoxConteudo = styled.View `
    flex:1;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const BoxListTexts = styled.View `
    margin-left:15px;
`;

export const BoxListTextsData = styled.Text `
    font-size:16px;
    color:#7F8C8D;
    font-weight:bold;
    margin-bottom:3px;
`;

export const BoxListTextsCar = styled.Text `
    font-size:16px;
    color:#7F8C8D;
`;

export const BoxListImageUser = styled.Image `
    width:50px;
    height:50px;
    border-radius:25px;
    border: 2px solid #fff;
`;
