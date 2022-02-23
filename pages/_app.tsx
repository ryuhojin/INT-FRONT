import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'src/styles/GlobalStyle';
import theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import 'styles/globals.css'
import { ReactQueryProvider } from 'utils/react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </ReactQueryProvider>);
}
export default MyApp;
