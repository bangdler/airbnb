import customStyled from '@/utils/custom-styled-component/customStyled';
import { CalenderDateProvider } from '@/context/CalenderDateProvider';
import GNB from '@/component/header/gnb/GNB';
import SearchBar from '@/component/header/search-bar/SearchBar';
import { SearchBarProvider } from '@/context/SearchBarProvider';

function Header() {
  return (
    <Container>
      <GNB />
      <SearchBarProvider>
        <CalenderDateProvider>
          <SearchBar />
        </CalenderDateProvider>
      </SearchBarProvider>
    </Container>
  );
}

const Container = customStyled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  min-width: 900px;
  padding: 0 30px;
`;

export default Header;
