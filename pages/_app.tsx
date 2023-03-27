import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "./signup/signup.css";
import "./login/login.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Components/Feed.css";
import AuthWrapper from "../context/auth";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
}

export default App;
