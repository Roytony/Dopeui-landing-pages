import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Workouts from '../components/Workouts'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Head>
        <title>FitClass Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative px-20 pt-10">
        <img src="/bg-adjustment.svg" className="absolute right-0 top-4" />
        <Header />
        <Hero />
        <Workouts />
      </main>
    </div>
  )
}

export default Home
