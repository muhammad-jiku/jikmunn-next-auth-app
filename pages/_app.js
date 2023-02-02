import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
