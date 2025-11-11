import type { AppProps } from 'next/app'
import '../styles/globals.css'

// Use Next's AppProps to provide proper typing for Component and pageProps
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}