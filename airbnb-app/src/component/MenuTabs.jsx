import styled from 'styled-components';

function MenuTabs() {
  const menuList = ['숙소', '체험', '온라인 체험'];

  return (
    <StyledContainer>
      {menuList.map(menu => (
        <StyledTab>{menu}</StyledTab>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  display: flex;
  gap: 24px;
`;

const StyledTab = styled.li`
  height: 23px;
  line-height: 23px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey1};
`;

export default MenuTabs;