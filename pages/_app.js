import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '../components/Page';
import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Project'
import Grid from '../components/Grid'
import '../styles/globals.css'

const components = {
  page: Page,
  hero: Hero,
  about: About,
  grid: Grid,
  project: Projects
};

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
