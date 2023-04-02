import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@components/Navbar'
import VideoBanner from '@components/VideoBanner'
import Intro from '@components/Intro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <VideoBanner />
      <Intro />
    </>
  )
}
