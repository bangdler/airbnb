import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  margin: 30px auto 0;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.radius2};
  box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
`;
