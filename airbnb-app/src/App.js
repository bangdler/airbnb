import { CustomThemeProvider } from './custom-styled-component/CustomThemeProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/globalStyle';
import theme from './common/theme';
import GNB from './component/GNB';
import SearchBar from './component/search-bar/SearchBar';

function App() {
  return (
    <CustomThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GNB />
        <SearchBar />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
