import classNames from 'classnames'

export const Card = ({ children, className }) => {
  const cardStyle = classNames('bg-gray-800 rounded-xl', className)

  return (
    <div className={cardStyle}>
      {children}
    </div>
  )
}
