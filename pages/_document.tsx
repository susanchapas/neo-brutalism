import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" href="/neo-brutalism/favicon.svg" type="image/svg+xml" />
          <link rel="alternate icon" href="/neo-brutalism/favicon.ico" />
          <link rel="apple-touch-icon" href="/neo-brutalism/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument