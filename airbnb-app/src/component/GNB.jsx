import { Container, Grid, Box } from '@mui/material';
import Logo from './Logo';
import MenuTabs from './MenuTabs';
import AccountMenu from './AccountMenu';
import styled from 'styled-components';

function GNB() {
  return (
    // <Container>
    //   <Grid container spacing={1} justifyContent="center" alignItems="center">
    //     <Grid item xs={1}>
    //       <Logo />
    //     </Grid>
    //     <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center' }}>
    //       <MenuTabs />
    //     </Grid>
    //     <Grid item xs={1}>
    //       <AccountMenu />
    //     </Grid>
    //   </Grid>
    // </Container>
    <StyledContainer>
      <Logo />
      <MenuTabs />
      <AccountMenu />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 1280px;
  margin: 24px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default GNB;
