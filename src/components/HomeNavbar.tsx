export default () => {
  return (
    <div className="flex flex-row p-8 pb-3 absolute w-full">
      <img src="/icon.png" className="w-14 h-14 me-1 -mt-3" />
      <h1 className="w-2/5 text-2xl font-light">oRganize</h1>
      <div className="w-3/5 text-end font-semibold ">
        <a href="/" className="me-10 hover:text-neutral-300 duration-200 glow">Inicio</a>
        <a href="/prices" className="me-10 hover:text-neutral-300 duration-200 glow">Precios</a>
        <a href="/about" className="me-10 hover:text-neutral-300 duration-200 glow">Acerca</a>

        <a href="/signup" className="me-3 p-3 bg-red-500 rounded-lg hover:bg-red-700 duration-200">Registrate</a>
        <a href="/login" className="p-3 bg-red-500 rounded-lg hover:bg-red-700 duration-200">Iniciar Sesion</a>
      </div>
    </div>
  )
}