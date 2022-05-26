import customStyled from '../../custom-styled-component/customStyled';

function MenuTabs() {
  const menuList = ['숙소', '체험', '온라인 체험'];

  return (
    <StyledContainer>
      {menuList.map((menu, key) => (
        <StyledTab key={key}>{menu}</StyledTab>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = customStyled.ul`
  display: flex;
  gap: 24px;
`;

const StyledTab = customStyled.li`
  height: 23px;
  line-height: 23px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey1};
`;

export default MenuTabs;
