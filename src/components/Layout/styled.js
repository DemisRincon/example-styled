import styled from 'styled-components';

export const LayoutContainer = styled.View`
  background-color: green;
  height: 100%;
`;

export const TextCustom = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 900;
`;

export const TextCustom2 = styled(TextCustom)`
    font-size: 40px;
    color: red;
`