export const Input = ({ type = 'text', placeholder = '', onChange, value }) => {
  return (
    <input type={type}
           className='bg-gray-600 h-14 rounded-lg placeholder:text-gray-200 px-5 focus:outline-none w-full'
           placeholder={placeholder}
           value={value}
           onChange={onChange}/>
  )
}
