import Layout from "../layouts/DefaultLayout"
import '../style/all.scss';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp
