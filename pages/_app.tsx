import '../styles/globals.css';
import type { AppProps } from 'next/app';
import init_bundles from '../bundles';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  useEffect(init_bundles, []);

  return <Component {...pageProps} />
}

export default App;