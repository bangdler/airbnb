import styled, { useTheme } from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Controller() {
  const theme = useTheme();

  const buttonStyle = {
    width: '30px',
    fill: theme.color.grey3,
  };

  return (
    <>
      <Button>
        <AddCircleOutlineIcon color="disable" sx={buttonStyle} />
      </Button>
      <Span>123</Span>
      <Button>
        <RemoveCircleOutlineIcon sx={buttonStyle} />
      </Button>
    </>
  );
}

const Button = styled.button`
  background-color: transparent;
`;

const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.grey1};
`;

export default Controller;
