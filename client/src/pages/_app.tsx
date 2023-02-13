import '@/styles/reset.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import Header from '@/components/Header'

import { ApolloProvider } from '@apollo/client'
import client from '@/config/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Manage your tasks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
