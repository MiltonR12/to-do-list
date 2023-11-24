type Props = {
  message: string
}

function CustomError({ message }: Props) {
  return (
    <small className='text-red-600 text-base'>{message}</small >
  )
}

export default CustomError