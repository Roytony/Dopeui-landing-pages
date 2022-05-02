import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image src="/wizkid/Group 3689.svg" width={600} height={600} />
          <div className="absolute left-10 top-10 rounded-xl bg-white p-2">
            <Image src="/wizkid/Vector.svg" width={40} height={40} />
          </div>
          <div className="absolute right-4 top-48 rounded-xl bg-white p-2">
            <Image src="/wizkid/Vector(1).svg" width={40} height={40} />
          </div>
          <div className="absolute right-0 flex space-x-4 rounded-lg bg-white p-2">
            <div>
              <Image src="/wizkid/Vector(2).svg" width={40} height={40} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Coding courses</h2>
              <p className="text-sm">
                <span className="text-[#F94E54]">+150</span> resources
              </p>
            </div>
          </div>
          <div className="absolute rounded-xl bg-white p-4">
            <Image src="/wizkid/Vectorcheck.svg" width={30} height={30} />
            <p className="font-semibold">
              Students <br /> Enrollerd
            </p>
            <div className="flex items-end space-x-2">
              <div className="h-9 w-4 rounded-lg bg-[#F94E54]" />
              <div className="h-11 w-4 rounded-lg bg-[#FFCBCB]" />
              <div className="h-8 w-4 rounded-lg bg-[#F94E54]" />
              <div className="h-7 w-4 rounded-lg bg-[#FFCBCB]" />
              <div className="h-12 w-4 rounded-lg bg-[#F94E54]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-7xl font-semibold leading-normal">
          Where <span className="text-[#F94E54]">Kids</span>
          <br />
          become
          <br />
          problems solvers
        </h1>
        <p className="py-2 text-lg font-medium leading-8">
          a Weekly , 1hour enrichment programs for students who <br />
          wants to learn how to build the futures, Ages 8-14
        </p>
        <div className="flex space-x-5 py-4">
          <button className="rounded-xl bg-[#F94E54] px-6 py-3 text-white">
            Enroll Now
          </button>
          <button className="rounded-xl bg-white px-6 py-3">
            Explore courses
          </button>
        </div>
        <p className="pt-8 text-xl font-medium">500+ courses in one Place</p>
      </div>
    </div>
  )
}

export default Hero
