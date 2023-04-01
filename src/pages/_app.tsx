import { PRIMARY_COLOR } from '@/constants';
import { store } from '@/store';
import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

interface PageLayoutProps {
  children: React.ReactNode;
}

type ComponentWithPageLayout = AppProps & {
  Component: {
    PageLayout?: React.FC<PageLayoutProps>;
  };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: PRIMARY_COLOR,
          },
        }}
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
        </Head>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ConfigProvider>
    </Provider>
  );
}
