import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom'

function ButtonCreateTask() {
  return (
    <Link
      to='/create'
      className="absolute bottom-10 right-10" >
      <div className="bg-cyan-400 w-16 h-16 rounded-full text-5xl
      flex items-center justify-center" >
        <IoMdAdd />
      </div>
    </Link>
  )
}

export default ButtonCreateTask