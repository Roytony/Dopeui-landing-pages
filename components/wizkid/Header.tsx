const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex space-x-10 font-semibold">
        <select className="bg-[#FFF2F2]">
          <option>Courses</option>
        </select>
        <p>Trending</p>
        <p>Teachers</p>
      </div>
      <h2 className="text-3xl font-bold text-[#F94E54]">Wizkids</h2>
      <div className="space-x-5">
        <button className="rounded-lg bg-white px-6 py-2">Sign Up</button>
        <button className="rounded-lg bg-[#F94E54] px-6 py-2 text-white">
          Log in
        </button>
      </div>
    </header>
  )
}

export default Header
