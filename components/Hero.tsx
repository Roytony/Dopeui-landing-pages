import Image from 'next/image'

const Hero = () => {
  const avatr = [
    { img: 'https://i.pravatar.cc/150?img=42' },
    {
      img: 'https://i.pravatar.cc/150?img=38',
    },
    {
      img: 'https://i.pravatar.cc/150?img=29',
    },
    {
      img: 'https://i.pravatar.cc/150?img=12',
    },
    {
      img: 'https://i.pravatar.cc/150?img=23',
    },
  ]
  return (
    <div className="flex  items-center justify-between ">
      <div className="">
        <h1 className="relative text-7xl font-semibold leading-normal">
          One Step Towards <br />a healthy lifeStyle
        </h1>
        {/* <img src="/Vector 39.svg" className="absolute right-0" /> */}
        <p className="py-4 text-lg font-medium leading-8 text-[#1F2041]">
          Healthy body is the secret of healthy lifestyle . start your <br />{' '}
          day with Bitclass . Book a free trial{' '}
        </p>
        <div className="flex items-center space-x-5 py-4">
          <button className="rounded-xl bg-[#2C5FF6] px-8  py-3 font-medium text-white">
            Get free trial
          </button>
          <button className="rounded-xl border-2 border-[#2C5FF6] px-8 py-3 font-medium  text-[#2C5FF6]">
            Invite friends
          </button>
        </div>
        <div className="py-2">
          <div className="flex items-center space-x-4">
            <Image src="/Star 9.svg" width={30} height={30} />
            <p className="text-lg">4.8 rating</p>
          </div>
          <div className="flex items-center space-x-4 py-2">
            {avatr.map((item) => (
              <Image
                src={item.img}
                key={item.img}
                width={40}
                height={40}
                className="rounded-full"
              />
            ))}
            <p className="font-medium">300+ joined</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/image & shadow.png"
          objectFit="contain"
          width={800}
          height={700}
        />
      </div>
    </div>
  )
}

export default Hero
