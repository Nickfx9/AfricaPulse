// pages/_app.js

import '../styles/styles.css'; // ✅ Import your global CSS here
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
