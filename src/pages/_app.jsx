import "@styles/globals.css";
import CoreLayout from "@src/layouts/core";

function MyApp({ Component, pageProps }) {
  return (
    <CoreLayout>
      <Component {...pageProps} />
    </CoreLayout>
  );
}

export default MyApp;
