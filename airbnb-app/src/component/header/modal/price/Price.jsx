import styled from 'styled-components';
import { ModalContainer } from '@/styled-component/ModalContainer';
import { Title } from '@/styled-component/Title';

function Price() {
  return (
    <Container>
      <Title>가격 범위</Title>
    </Container>
  );
}

const Container = styled(ModalContainer)`
  width: 400px;
`;

export default Price;
