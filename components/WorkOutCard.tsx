import Image from 'next/image'

export interface Props {
  color: string
  head1: string
  head2: string
  para: string
  time: number
  cal: number
  img: string
}

const WorkOutCard = (props: Props) => {
  const { color, head1, head2, para, time, cal, img } = props

  return (
    <article
      className={`relative flex  h-[250px] w-full max-w-[350px] flex-col justify-end  rounded-xl ${color} p-4`}
    >
      <img src={img} className="absolute right-0 " />
      <div>
        <h2 className="py-2 text-2xl font-semibold leading-normal">
          {head1}
          <br />
          {head2}
        </h2>

        <p className="pb-2 text-gray-600">{para}</p>
        <div className="flex space-x-4">
          <div className="flex items-center rounded-xl bg-white py-1 px-3">
            <Image src="/Group 3781.svg" width={20} height={20} />
            <p>{time} min</p>
          </div>
          <div className="z-10 flex items-center rounded-xl bg-white py-1 px-3">
            <Image src="/image 1454.svg" width={20} height={20} />
            <p>{cal} cal</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default WorkOutCard
