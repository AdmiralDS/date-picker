import styled from 'styled-components';

export const InputLine = styled.input`
  border: none;
  outline: none;
  appearance: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ::placeholder {
    color: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
`;
