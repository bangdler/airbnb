import styled from 'styled-components';

function Logo() {
  return <StyledTitle>LOGO</StyledTitle>;
}

//const StyledTypography = styled(Typography)``
const StyledTitle = styled.h1`
  width: 88px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: ${({ theme }) => theme.fontWeight.logo};
  color: ${({ theme }) => theme.color.grey1};
`;

export default Logo;
