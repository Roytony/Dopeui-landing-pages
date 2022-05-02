import Head from 'next/head'
import Hero from '../components/wizkid/Hero'
import Header from '../components/wizkid/Header'

const Wizkids = () => {
  return (
    <div>
      <Head>
        <title>Wizkids</title>
      </Head>
      <main className="relative min-h-screen  w-full bg-[#FFF2F2] py-10 px-20">
        <img src="/wizkid/bg-icons.svg" className="absolute" />
        <Header />
        <Hero />
      </main>
    </div>
  )
}

export default Wizkids
