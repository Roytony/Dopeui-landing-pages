import WorkOutCard from './WorkOutCard'
import { Props } from './WorkOutCard'

const Workouts = () => {
  const Workouts: Props[] = [
    {
      color: 'bg-[#C5E5FE]',
      head1: 'Yoga',
      head2: 'Training',
      para: 'for begginers',
      time: 15,
      cal: 200,
      img: '/image 1954.png',
    },
    {
      color: 'bg-[#F09BF6]',
      head1: 'Yoga',
      head2: 'Training',
      para: 'for begginers',
      time: 15,
      cal: 200,
      img: '/image 1953.png',
    },
    {
      color: 'bg-[#99F3DF]',
      head1: 'Yoga',
      head2: 'Training',
      para: 'for begginers',
      time: 15,
      cal: 200,
      img: '/image 1947.png',
    },
  ]
  return (
    <section className="pb-5">
      <h2 className="text-center text-2xl font-medium">Top Workouts</h2>
      <div className="flex items-center justify-between pt-2">
        {Workouts.map((item, index) => (
          <WorkOutCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Workouts
