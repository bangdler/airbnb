import { CustomThemeProvider } from './custom-styled-component/CustomThemeProvider';
import theme from './common/theme';
import GNB from './component/GNB';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/globalStyle';

function App() {
  return (
    <CustomThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GNB />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
