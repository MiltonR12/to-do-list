import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CardTask from './CardTask'
import { FaChevronLeft } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

function TaskBar() {

  const tasks = useSelector((state: RootState) => state.task)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`bg-slate-900 w-80 h-screen fixed md:relative md:translate-x-0
    ${isOpen ? "" : "-translate-x-full"} transition-all`} >
      <div
        onClick={handleClick}
        className='absolute -right-7 top-2/4 -translate-y-2/4 flex items-center justify-center
        text-cyan-400 border-2 bg-slate-900 rounded-full p-2 border-cyan-400
        cursor-pointer select-none md:hidden text-3xl' >
        {isOpen ? <FaChevronLeft /> : <FaAngleRight />}
      </div>
      <h2 className='text-3xl h-[80px] font-semibold flex items-center justify-center' >
        Tareas
      </h2>
      <ul className='h-[calc(100vh-80px)] overflow-y-auto menuBar' >
        {
          tasks.tasks.map((item) => (
            <CardTask task={item} key={item.id} isVisible={item.id === tasks.taskVisible} />
          ))
        }
      </ul>
    </nav>
  )
}

export default TaskBar