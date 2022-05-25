import styled from 'styled-components';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AccountMenu() {
  return (
    <StyledDiv>
      <DehazeIcon sx={{ fontSize: 24 }} />
      <AccountCircleIcon sx={{ fontSize: 32 }} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  width: 76px;
  height: 40px;
  align-items: center;
  padding: 4px 4px 4px 16px;
  gap: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.radius3};
  border: 1px solid ${({ theme }) => theme.color.grey4};
`;

export default AccountMenu;
