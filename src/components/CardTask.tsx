import { useDispatch } from 'react-redux'
import { setVisible } from '../features/tasks/taskSlice';
import { GrStatusGood, } from "react-icons/gr";

type Prosp = {
  isVisible: boolean,
  task: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createAt: string;
  }
}

function CardTask({ task, isVisible }: Prosp) {

  const dispatch = useDispatch()

  const handleClick = (id: string) => {
    dispatch(setVisible(id))
  }

  return (
    <li
      onClick={() => handleClick(task.id)}
      className={`flex items-center py-2 px-4 hover:bg-slate-800 cursor-pointer
      ${isVisible ? "bg-slate-800" : ""}`} >
      <div className="w-4/5" >
        <h3 className="text-2xl truncate text-cyan-400" >{task.title}</h3>
        <p className="text-zinc-200 truncate" >{task.description}</p>
        <small className='text-zinc-400' >{task.createAt}</small>
      </div>
      <div className='flex items-center justify-center' >
        <span className='text-green-500 text-4xl' >
          {task.completed && <GrStatusGood />}
        </span>
      </div>
    </li>
  )
}

export default CardTask