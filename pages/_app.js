import ContextProvider from "@/context/ContextProvider";
import store from "@/redux/store";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <NextTopLoader
        color="darkorchid"
        initialPosition={0.08}
        crawlSpeed={100}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={700}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
      />

      <Toaster position="top-center" reverseOrder={false} />
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Provider>
    </>
  );
}
