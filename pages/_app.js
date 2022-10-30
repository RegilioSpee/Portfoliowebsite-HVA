import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '../components/Page';
import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import '../styles/globals.css'

const components = {
  page: Page,
  hero: Hero,
  about: About,
  projects: Projects
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
