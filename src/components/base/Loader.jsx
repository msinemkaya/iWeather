import spinner from '../../assets/spinner-gap-regular.svg'

export const Loader = () => {
  return (
    <img src={spinner} className='absolute right-3 top-3 animate-spin-slow'
         alt='loading spinner'/>
  )
}
