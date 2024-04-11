import classNames from 'classnames'

export const Card = ({ children, className, ...rest }) => {
  const cardStyle = classNames('bg-gray-800 rounded-xl', className)

  return (
    <div className={cardStyle} {...rest}>
      {children}
    </div>
  )
}
