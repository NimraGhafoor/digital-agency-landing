// pages/index.js
import Head from 'next/head';
import Hero from '../components/hero';
import Product from '../components/product';
import Footer from '../components/footer'
import Services from '../components/service';
import About from '../components/about';
import Clients from '../components/client';
import CTA from '../components/cta';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Agency</title>
        < meta name="description" content="Creative digital agency landing page" />
      </Head>
      <Hero />
      <Product />
      <Services />
      <About />
      <Clients />
      <CTA />
      <Footer />
    </>
  );
}
