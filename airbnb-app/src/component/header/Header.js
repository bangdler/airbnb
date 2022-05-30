import Calender from '@/component/header/calender/Calender';
import { CalenderDateProvider } from '@/component/header/calender/CalenderDateProvider';
import GNB from '@/component/header/gnb/GNB';
import SearchBar from '@/component/header/search-bar/SearchBar';
import { SearchBarProvider } from '@/component/header/search-bar/SearchBarProvider';

function Header() {
  return (
    <>
      <GNB />
      <SearchBarProvider>
        <CalenderDateProvider>
          <SearchBar />
          <Calender page={2} />
        </CalenderDateProvider>
      </SearchBarProvider>
    </>
  );
}

export default Header;
