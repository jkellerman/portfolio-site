import "@styles/globals.css";
import CoreLayout from "@src/layouts/core";
import { poppins, inter } from "@src/utils/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <CoreLayout>
        <Component {...pageProps} />
      </CoreLayout>
    </div>
  );
}

export default MyApp;
