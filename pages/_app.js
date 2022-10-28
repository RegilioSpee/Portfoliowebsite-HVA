import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '../components/Page';
import About from '../components/About';
import Hero from '../components/Hero';
import '../styles/globals.css'

const components = {
  page: Page,
  hero: Hero,
  about: About
};

storyblokInit({
  accessToken: 'qUNQBHApIkrtR622dvWErAtt',
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
