export const WeatherBackgroundContainer = ({ bg, children }) => {
  return (
    <div className={`rounded-lg h-80 overflow-hidden bg-cover flex flex-col`}
         style={{ backgroundImage: ` url(${bg})` }}>
      {children}
    </div>
  )
}
