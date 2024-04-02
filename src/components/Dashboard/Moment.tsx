export default ({ username, src }) => {
  return (
    <div className="flex w-4/12 h-full">
      <div className="my-auto">
        <img className="w-4/6 h-4/6 mx-auto rounded-full overflow-hidden cursor-pointer" src={src} />
        <p className="text-xs text-center cursor-pointer">{username}</p>
      </div>
    </div>
  )
}
