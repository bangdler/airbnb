import { Input, Box } from '@material-ui/core';
import customStyled from '../../custom-styled-component/customStyled';
import ResetButton from './ResetButton';

function SearchInput({ label, placeholder }) {
  return (
    <Box>
      <Label>{label}</Label>
      <Input disableUnderline={true} placeholder={placeholder}></Input>
      <ResetButton></ResetButton>
    </Box>
  );
}

const Label = customStyled.div`
  color: ${({ theme }) => theme.color.black};
`;

export default SearchInput;
