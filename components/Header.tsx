import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold text-[#2C5FF6]">FitClass</h2>
      <nav className="flex space-x-10">
        <p className="cursor-pointer font-semibold">Features</p>
        <p className="cursor-pointer font-semibold">Pricing</p>
        <p className="cursor-pointer font-semibold">Community</p>
        <p className="cursor-pointer font-semibold">LifeStyle</p>
      </nav>
      <div className="flex items-center space-x-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white">
          <Image src="/image 23.svg" width={30} height={30} />
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white">
          <Image src="/image 1468.svg" width={30} height={30} />
        </div>
        <button className="rounded-lg bg-[#2C5FF6] px-8 py-2 font-semibold text-white">
          Get Free Trial
        </button>
      </div>
    </header>
  )
}

export default Header
