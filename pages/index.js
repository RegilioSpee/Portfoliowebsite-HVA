import Header from '../components/Header'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import About from '../components/About'
import Form from '../components/Form'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Navbar from '../components/Navbar'
 
storyblokInit({
  accessToken: "qUNQBHApIkrtR622dvWErAtt",
  use: [apiPlugin]
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Form />
      <About />
      <Footer />
    </div>
  )
}
