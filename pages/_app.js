// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/nnavbar';

export default function App({ Component, pageProps }) {
  return (
    <>
        <Navbar />
        <Component {...pageProps} />
    </>
);
}
