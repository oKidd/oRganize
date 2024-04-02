export default () => {
  return (
    <div id="nav" className="flex w-1/12 h-full">
      <div className="rounded-lg h-5/6 w-8/12 my-auto bg-neutral-950/50">
        <div className="p-4 h-full">
          <img className="mb-3 duration-150 cursor-pointer" src="./icons/dashboard.svg" />
          <img className="mb-3 glow duration-150 cursor-pointer" src="./icons/chats.svg" />
          <img className="mb-3 glow duration-150 cursor-pointer" src="./icons/calendar.svg" />
          <img className="mb-3 glow duration-150 cursor-pointer" src="./icons/settings.svg" />
        </div>
      </div>
    </div>
  )
}
