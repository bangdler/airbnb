import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 40px;
  margin: 250px auto 0;
  background-color: ${({ theme }) => theme.modal.backgourndColor};
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
`;
