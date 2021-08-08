import "assets/scss/main.scss";
import Head from 'next/head';
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from "../redux/store"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <>
        <Head>
          <title>The Social Media</title>
          <link rel="shortcut icon" href="" />
        </Head>
        <Component {...pageProps} /> 
      </>
    </Provider>
    </>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
