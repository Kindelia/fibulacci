import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
