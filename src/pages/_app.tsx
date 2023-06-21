import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {      
      if (url.includes('/404')) return;
      if (!router.asPath.match(/^\/[a-zA-Z0-9-_]*$/)) {
        router.push('/404');
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
