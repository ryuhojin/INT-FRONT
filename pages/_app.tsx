import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import wrapper from "../store";
import '../styles/globals.css'
import { ReactQueryProvider } from '../utils/react-query';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryProvider pageProps={pageProps}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ReactQueryProvider>);
}
export default wrapper.withRedux(MyApp);
