import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { deleteTask, updateCompleted } from "../features/tasks/taskSlice";
import { Link } from 'react-router-dom'
import Welcom from "./Welcom";
import { deleteTaskAlert } from '../components/alerts/customAlert'

type Props = {
  idVisible: string,
  tasks: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createAt: string;
  }[]
}

function TaskShow({ idVisible, tasks }: Props) {

  const task = tasks.find((item) => item.id === idVisible)
  const dispatch = useDispatch()

  const handleDelete = (id: string) => {
    deleteTaskAlert().then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask(id))
      }
    })
  }

  const handleCompleted = (id: string) => {
    dispatch(updateCompleted(id))
  }

  return (
    <div className="p-5 h-screen w-full" >
      {!task ? <Welcom /> : <div>
        <div
          className="grid grid-cols-1 gap-3 md:grid-cols-2 border-b border-cyan-400 pb-3 px-3
          capitalize" >
          <div className="flex justify-between items-center" >
            <h3 className="text-xl md:text-3xl font-semibold" >{task.title}</h3>
            <small>{task.createAt}</small>
          </div>
          <div className="px-5 flex justify-end items-center gap-5 md:text-2xl" >
            <button
              onClick={() => handleCompleted(task.id)}
              className="border-2 border-cyan-400 rounded-md py-1 px-4" >
              {task.completed ? "Tarea completa" : "Tarea incompleta"}
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-600 cursor-pointer" >
              <MdDelete />
            </button>
            <Link to={`/update/${task.id}`} className="text-cyan-400 cursor-pointer" >
              <BsPencilSquare />
            </Link>
          </div>
        </div>
        <p className="pt-5" >{task.description}</p>
      </div>}
    </div>
  )
}

export default TaskShow