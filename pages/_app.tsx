import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import 'styles/globals.css'
import { ReactQueryProvider } from 'utils/react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ReactQueryProvider>);
}
export default MyApp;
