export default ({ username, src, msg }) => {
    return (
      <div className="w-100 h-full border-neutral-800 border-b-2">
        <div className="flex p-3 cursor-pointer">
          <img className="w-1/5 me-3 rounded-full overflow-hidden" src={src} />
          <div className="w-4/5 overflow-hidden">
            <p className="text-base text-start">{username}</p>
            <p className="text-sm text-start text-ellipsis whitespace-nowrap overflow-x-hidden">{msg}</p>
          </div>
        </div>
      </div>
    )
  }
  