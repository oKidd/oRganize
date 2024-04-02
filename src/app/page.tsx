import Navbar from "../components/HomeNavbar"

export default function Home() {
  return (
    <div className="h-screen w-100 bg-neutral-900 text-white">
      <div className="h-full pc">
        <Navbar />
        <div className="w-100 flex flex-row h-full pt-16">
          <div
            id="left"
            className="w-2/4 text-left ps-20 items-center justify-center my-auto"
          >
            <h1 className="text-3xl font-extrabold mb-5">
              ¡Experimenta la nueva era de la organización!
            </h1>
            <p className="text-neutral-400">
              Maximiza tu eficacia al gestionar tus grupos de trabajo como nunca
              antes.
              <br />
              ¡Simplifica tu vida y descubre una forma totalmente nueva de
              organizar!
            </p>
            <button className="mt-10 bg-red-500 hover:bg-red-700 duration-150 p-3 rounded-lg text-lg font-semibold">
              Probar Ahora
            </button>
          </div>
          <div id="right" className="w-2/4 my-auto">
            <img className="w-3/5 mx-auto my-auto" src="/home/people.png"></img>
          </div>
        </div>
      </div>
      <div className="h-full mobile w-100">
        <div className="h-full flex w-100">
          <div className="mx-auto m-auto text-center">
            <div className="flex justify-center items-center h-24">
              <img src="/icon.png" className="w-24 h-24" />
              <h1 className="text-5xl font-light">oRganize</h1>
            </div>
            <h1 className="text-3xl font-extrabold mt-14 p-5">
              ¡Experimenta la nueva era de la organización!
            </h1>
            <p className="text-lg text-neutral-400 p-5">
              Maximiza tu eficacia al gestionar tus grupos de trabajo como nunca
              antes.
              <br />
              ¡Simplifica tu vida y descubre una forma totalmente nueva de
              organizar!
            </p>
            <button className="mt-10 bg-red-500 hover:bg-red-700 duration-150 p-3 rounded-lg text-2xl font-semibold w-10/12">
              Probar Ahora
            </button>
            {/* <img src="/store_button.png" className="p-10" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
